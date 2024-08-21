import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create and append the script for Chatbase
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute("chatbotId", "6ppxknfiKypIWtREpl5Qj");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    // Set the embedded chatbot configuration
    window.embeddedChatbotConfig = {
      chatbotId: "6ppxknfiKypIWtREpl5Qj",
      domain: "www.chatbase.co",
    };

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '700px' }}>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/6ppxknfiKypIWtREpl5Qj"
        width="100%"
        style={{ height: '100%', minHeight: '700px' }}
        frameBorder="0"
        title="Chatbase Chatbot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
