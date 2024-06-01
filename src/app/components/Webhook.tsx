import React from 'react';
import axios from 'axios';

const webhookUrl = "https://discord.com/api/webhooks/1246173958231818282/0_xmwoG4Q6JMEwXDc03O6rK-gwVUrUpTTEUqmVLgLrp6nOSpBiKdbWFNeZQ-wMr0UNSl";

const withWebhook = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithWebhook = (props: P & { message: string }) => {
    const handleClick = async (e: React.MouseEvent) => {
      e.preventDefault(); // Förhindra standardlänkbeteende

      try {
        await axios.post(webhookUrl, {
          content: props.message,
        });
      } catch (error) {
        console.error('Error sending message:', error);
      }

      // Efter webhook POST, fortsätt med standardlänkbeteende
      window.location.href = (props as any).href;
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };

  ComponentWithWebhook.displayName = `withWebhook(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithWebhook;
};

export default withWebhook;
