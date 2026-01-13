const express = require("express");
const { router } = require("./routes/user.routes");
const { attachUser } = require("./middlewares/users.middleware");

const app = express();
app.use(express.json());

app.use(attachUser);
app.use(router);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.");
})
