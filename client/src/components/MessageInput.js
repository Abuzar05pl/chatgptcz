import React from "react";

const MessageInput = ({ newMessage, setNewMessage }) => {
  return (
    <input
      type="text"
      placeholder="Enter message..."
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
      className="mt-[20px] px-4 py-2 border rounded-2xl w-[700px] max-w-full"
    />
  );
};

export default MessageInput;
