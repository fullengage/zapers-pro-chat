import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Boa tarde! Como você está? Se precisar de algo ou tiver alguma pergunta, estou aqui para ajudar.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const sendToWebhook = async (message: string) => {
    try {
      const response = await fetch('https://autowebhook.chathook.com.br/webhook/chat01', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      console.log('Resposta do webhook:', data);
      
      if (data?.output) {
        addMessage(data.output, false);
      } else if (data && Array.isArray(data) && data.length > 0 && data[0]?.output) {
        addMessage(data[0].output, false);
      } else {
        console.log('Estrutura inesperada da resposta:', data);
        addMessage("Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve.", false);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      addMessage("Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve.", false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const message = inputValue.trim();
    addMessage(message, true);
    setInputValue("");
    
    setIsTyping(true);
    
    setTimeout(async () => {
      setIsTyping(false);
      await sendToWebhook(message);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const TypingIndicator = () => (
    <div className="mb-4">
      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%] inline-block">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-btn w-16 h-16 rounded-full shadow-elegant"
        variant="hero"
        size="icon"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      <div className={`chat-window absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border ${isOpen ? 'open' : ''}`}>
        <div className="gradient-bg text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold">Assistente ZapCode</h4>
              <p className="text-xs opacity-80">Online agora</p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white hover:bg-opacity-20 w-8 h-8"
          >
            <X size={16} />
          </Button>
        </div>
        
        <div className="p-4 h-80 overflow-y-auto">
          <div className="mb-4 text-center text-gray-500 text-sm">
            Hoje, {new Date().toLocaleDateString('pt-BR')}
          </div>
          
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.isUser ? 'ml-auto text-right' : ''}`}>
              <div className={`p-3 max-w-[80%] rounded-2xl ${
                message.isUser 
                  ? 'bg-purple-100 rounded-tr-none inline-block' 
                  : 'bg-gray-100 rounded-tl-none'
              }`}>
                <p className="text-sm">{message.text}</p>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="border-t p-3">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 rounded-full"
            />
            <Button
              onClick={handleSendMessage}
              variant="hero"
              size="icon"
              className="w-10 h-10 rounded-full"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;