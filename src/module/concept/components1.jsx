import React, { useState } from "react";

// Parent Component
const Parent = () => {
  const [messageFromChild, setMessageFromChild] = useState("");

  const handleChildMessage = (message) => {
    setMessageFromChild(message);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {messageFromChild}</p>
      <Child parentMessage="Hello from Parent!" onSendMessage={handleChildMessage} />
    </div>
  );
};

// Child Component
const Child = ({ parentMessage, onSendMessage }) => {
  const sendMessageToParent = () => {
    onSendMessage("Hello from Child!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from Parent: {parentMessage}</p>
      <button onClick={sendMessageToParent}>Send Message to Parent</button>
    </div>
  );
};

export default Parent;
