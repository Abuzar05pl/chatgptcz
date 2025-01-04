import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Получение сообщений с сервера
  const fetchMessages = async () => {
    try {
      const response = await axios.get(apiUrl + "/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке сообщений", error);
    }
  };

  // Отправка нового сообщения
  const sendMessage = async () => {
    if (newMessage.trim()) {
      try {
        await axios.post(apiUrl + "/messages", {
          content: newMessage,
        });
        setNewMessage("");
        fetchMessages(); // Обновляем сообщения после отправки
      } catch (error) {
        console.error("Ошибка при отправке сообщения:", error);
      }
    }
  };

  // Удаление сообщения по ID
  const clearMessageById = async (id) => {
    try {
      console.log("Trying to delete message with id:", id); // Проверяем ID
      await axios.delete(`${apiUrl}/messages/${id}`);
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)
      );
    } catch (error) {
      console.error("Ошибка удаления сообщения", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Загружаем сообщения при монтировании компонента
  }, []);

  return (
    <div className="max-h-[400px] overflow-y-scroll border border-black p-2 mb-4">
      {messages.map((msg) => (
        <div key={msg.id} className="p-2 border-b border-black text-white">
          {console.log("Message ID:", msg.id)} {/* Проверяем наличие ID */}
          {msg.content}
          <button
            onClick={() => clearMessageById(msg.id)}
            className="ml-4 bg-red-900 text-white rounded px-2"
          >
            Delete
          </button>
        </div>
      ))}

      {/* Поле для отправки сообщений */}
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border rounded-l px-2 py-1 w-[500px] ml-[340px]"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white rounded-r px-4 py-1"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
