import React from "react";

const AddMessageButton = ({ newMessage, setNewMessage, sendMessage }) => {
  return (
    <div className="flex mt-4">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Enter your message"
        className="border rounded px-2 py-1 w-[700px]"
      />
      <button
        onClick={sendMessage}
        className="ml-2 bg-blue-500 text-white rounded px-2 py-1"
      >
        Send
      </button>
    </div>
  );
};

export default AddMessageButton;
