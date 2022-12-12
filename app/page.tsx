import ChatInput from "../components/ChatInput";
import MessageList from "../components/MessageList";
import { Message } from "../typings";

type Props = {};

const HomePage = async (props: Props) => {
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );

  const messages: Message[] = data.messages;

  return (
    <main>
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  );
};

export default HomePage;
