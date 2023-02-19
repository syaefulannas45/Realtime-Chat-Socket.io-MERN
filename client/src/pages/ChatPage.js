import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("/api/chat");
    setChats(res.data);
  };
  console.log(chats);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
