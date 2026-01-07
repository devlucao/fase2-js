const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify("Home!"));
        return;
    }
    if(req.url === "/health") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify("Health ok!"));
        return;
    }
    if(req.url === "/exercise-three") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            method: req.method,
            url: req.url
        }))
        return;
    }
    res.writeHead(404);
    res.end("Rota não encontrada.");
    // res.end(JSON.stringify({ "status": "ok", "env": "dev" })); 
});

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
});

