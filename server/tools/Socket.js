const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const SocketIo = () => {
  io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`user with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
        
      socket.to(data.room).emit("recieve_message", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id);
    });
  });
  server.listen(8000, () => {
    console.log("Socket is listening on port 8000");
  });
};

module.exports = SocketIo;
