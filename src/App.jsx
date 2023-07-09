import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./Components/ChatFeed";

const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="849f76fc-e38e-41f7-9ccc-f2ed0ba43ca8"
        userName="pouriaaa"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        onConnect={(creds) => console.log('creds')}
      />
    </div>
  );
};

export default App;
