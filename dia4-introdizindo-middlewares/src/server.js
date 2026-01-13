const express = require("express");
const router = require("./routes/route");
const { printMethodAndRoute } = require("./middlewares/auth.middleware");

const app = express();
app.use(express.json());

app.use(printMethodAndRoute);
app.use(router); 

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
})