const handlerRoutes = require("./routes");
const http = require("http");

const server = http.createServer((req, res) => {
    const handled = handlerRoutes(req, res);

    if(!handled) {
        res.writeHead(404);
        res.end("Rota não encontrada.");
    }
});

server.listen(3000, ()=> {
    console.log("Servidor funcionando na porta 3000.")
})