const handlerRoutes = (req, res) => {

    if (req.method === "POST" && req.url === "/login") {
        let body = "";
        req.on("data", chunck => {
            body += chunck;
        })

        req.on("end", () => {
            try {
                const { email, password } = JSON.parse(body);
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "Login recebido.",
                    email,
                    password
                }));

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "JSON inválido" }));
            }
        });
        return true;
    }

    if (req.method === "POST" && req.url === "/orders") {
        let body = "";
        req.on("data", chunck => {
            body += chunck;
        });
        req.on("end", () => {
            try {
                const { product, price } = JSON.parse(body);

                if (typeof price !== "number" || Number.isNaN(price)) {
                    res.writeHead((400), { "Content-Type": "application/json" });
                    res.end(JSON.stringify("Price não é número."));
                    return;
                }

                res.writeHead((201), { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    message: "Pedido cadastrado com sucesso!",
                    product,
                    price
                }));

            } catch (error) {
                res.writeHead((400), { "Content-Type": "application/json" });
                res.end(JSON.stringify("JSON inválido."));
            }
        })
        return true;
    }

    return false;
}

module.exports = handlerRoutes;