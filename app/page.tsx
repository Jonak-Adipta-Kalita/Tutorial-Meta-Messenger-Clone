import ChatInput from "../components/ChatInput";
import MessageList from "../components/MessageList";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
};

export default HomePage;
