import http from "http";
import os from "os";

const server = http.createServer();
const PORT = 3000;
const url = "http://localhost:3000";

function getMetrics() {
    return {
        loadAvg: os.loadavg(),
        freeMemMB: (os.freemem() / 1024 / 1024).toFixed(0),
        totalMemMB: (os.totalmem() / 1024 / 1024).toFixed(0),
        memUsagePct: (
            ((os.totalmem() - os.freemem()) / os.totalmem()) *
            100
        ).toFixed(1),
    };
}

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ server });

wss.on("connection", (socket) => {
    console.log("Client connected");

    const interval = setInterval(() => {
        socket.send(JSON.stringify(getMetrics()));
    }, 1000);

    socket.on("message", (data) => {
        console.log("Recieved:", data.toString());
    });

    socket.on("close", () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });

    socket.on("error", (err) => {
        console.error("Socket error:", err);
    });
});


server.listen(PORT, () => {
    console.log(`Server running on : ${url}`)
});