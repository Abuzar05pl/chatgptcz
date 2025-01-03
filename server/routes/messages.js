const express = require("express");
const router = express.Router();
const Message = require("../models/messageModel");

// Отправить сообщение
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    const message = await Message.create({ text });
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Получить сообщения
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Удалить сообщение по ID
router.delete("/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
