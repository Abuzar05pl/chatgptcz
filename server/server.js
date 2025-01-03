const jsonServer = require("json-server");
const fs = require("fs");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Кастомный маршрут для очистки сообщений
server.delete("/messages", (req, res) => {
  try {
    const dbFilePath = "db.json";
    const dbData = JSON.parse(fs.readFileSync(dbFilePath, "utf-8"));

    dbData.messages = []; // Очищаем массив сообщений

    fs.writeFileSync(dbFilePath, JSON.stringify(dbData, null, 2));
    res.status(200).send({ message: "Chat cleared" });
  } catch (error) {
    res.status(500).send({ message: "Error clearing chat" });
  }
});

// Используем стандартный роутер json-server
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running at http://localhost:5000");
});