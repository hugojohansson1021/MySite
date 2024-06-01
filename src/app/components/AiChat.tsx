import React, { FormEvent, useEffect, useRef, useState } from 'react';

/* eslint-disable react/no-unescaped-entities */

interface ChatbotProps {
  apiEndpoint: string;
  botName?: string;
  botAvatarSrc?: string;
}

interface Message {
  type: 'question' | 'response';
  text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ apiEndpoint, botName = 'HugoAI assistent', botAvatarSrc = '/MyFace.png' }) => {
  const [question, setQuestion] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { type: 'response', text: 'Har du några frågor om Hugo? det är bara att fråga på?' },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const webhookUrl = "https://discord.com/api/webhooks/1246173958231818282/0_xmwoG4Q6JMEwXDc03O6rK-gwVUrUpTTEUqmVLgLrp6nOSpBiKdbWFNeZQ-wMr0UNSl";

  const sendToWebhook = async (message: string) => {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      });
    } catch (error) {
      console.error('Ett fel inträffade vid sändning till webhook:', error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    // Skicka frågan till webhooken
    await sendToWebhook(question);

    setMessages(prevMessages => [...prevMessages, { type: 'question', text: question }]);

    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error(`Server svarade med status: ${res.status}`);
      }

      const data = await res.json();
      setMessages(prevMessages => [...prevMessages, { type: 'response', text: data.response }]);
    } catch (err) {
      console.error('Ett fel inträffade:', err);
      setError('Ett fel inträffade vid hämtning av svaret.');
    } finally {
      setIsLoading(false);
      setQuestion('');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', width: '89vw', maxWidth: '500px', margin: 'auto', border: '1px solid #000000', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={{ padding: '10px', backgroundColor: '#76FFBF', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
        <h1 style={{ alignSelf: 'center', color: 'black' }}>{botName}</h1>
      </div>
      <div style={{ height: '500px', overflowY: 'auto', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#fff' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ alignSelf: message.type === 'question' ? 'flex-end' : 'flex-start', backgroundColor: message.type === 'question' ? '#76FFBF' : '#76FFBF', borderRadius: '10px', padding: '10px', maxWidth: '80%', display: 'flex', alignItems: 'center', position: 'relative' }}>
            {message.type === 'response' && (
              <img src={botAvatarSrc} alt="Bot Avatar" style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
            )}
            <p style={{ margin: 0, color: 'black' }}>{message.text}</p>
            <div
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: message.type === 'question' ? 'auto' : '10px',
                right: message.type === 'question' ? '10px' : 'auto',
                width: '10px',
                height: '10px',
                backgroundColor: '#76FFBF',
                transform: message.type === 'question' ? 'rotate(45deg)' : 'rotate(-45deg)',
              }}
            />
          </div>
        ))}
        <div ref={bottomRef} />
        {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
            <div className="dot-typing">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        {error && <p style={{ color: 'red', alignSelf: 'center' }}>{error}</p>}
      </div>
      <div className='text-gray-500 bg-white cursive text-center text-sm'> Svaret kan ta några sekunder  </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', borderTop: '1px solid #000', padding: '10px', backgroundColor: '#f5f5f5', color: '#666' }}>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Skriv din fråga här" disabled={isLoading} style={{ flexGrow: 1, padding: '10px', marginRight: '10px', border: '1px solid #000000', borderRadius: '10px', fontSize: '16px' }} />
        
        <button type="submit" disabled={isLoading} style={{ padding: '10px 15px', fontSize: '16px', cursor: 'pointer', border: 'none', backgroundColor: '#76FFBF', color: 'black', borderRadius: '10px' }}>
          Sök
        </button>

        
      </form>
    </div>
  );
};

export default Chatbot;
