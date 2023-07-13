import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "./Context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const onSub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      onSub();
    };
  }, [data.chatID]);

  return (
    <div className="p-4 h-[calc(100%_-_150px)] w-full overflow-y-auto flex flex-col gap-2">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default Messages;
