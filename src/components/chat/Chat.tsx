import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  return (
    <div className="h-screen w-full bg-third">
      <ChatHeader />
      <ChatMessage />
      <ChatInput />
    </div>
  );
};

export default Chat;
