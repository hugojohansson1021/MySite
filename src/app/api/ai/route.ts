import OpenAI from 'openai';
import type { NextRequest } from 'next/server';


const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const assistantId = 'asst_cQmrWFPKEZX2nFVHJWejPgaR';

export async function POST(req: NextRequest) {
  if (!req.body) {
    return new Response(JSON.stringify({ error: 'Förfrågan saknar kropp' }), { status: 400 });
  }

  try {
    const { question } = await req.json();
    if (!question) {
      return new Response(JSON.stringify({ error: 'Frågan saknas i förfrågningskroppen' }), { status: 400 });
    }

    const assistant = await openai.beta.assistants.retrieve(assistantId);
    console.log(assistant)
    const thread = await openai.beta.threads.create();
    console.log("creating thread:", thread)
    await openai.beta.threads.messages.create(thread.id, { role: "user", content: question });
    const run = await openai.beta.threads.runs.create(thread.id, { assistant_id: assistant.id, instructions: "Svara på användarens fråga och använd informationen som är upladdad" });

    await checkRunStatus(thread.id, run.id);

    const messagesResponse = await openai.beta.threads.messages.list(thread.id);
    console.log(messagesResponse)
    let assistantResponse = "Inget svar mottaget";
    if (messagesResponse.data) {
      const assistantMessage = messagesResponse.data.find(m => m.role === 'assistant');
      if (assistantMessage && assistantMessage.content) {
        assistantResponse = assistantMessage.content.map(c => 'text' in c && c.text ? c.text.value : '').join('\n');
      }
    }

    return new Response(JSON.stringify({ response: assistantResponse }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

async function checkRunStatus(threadId: string, runId: string): Promise<void> {
  let status = '';
  do {
    const response = await openai.beta.threads.runs.retrieve(threadId, runId);
    status = response.status;
    if (status !== 'completed') {
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  } while (status !== 'completed');
}