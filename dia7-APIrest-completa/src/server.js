const express = require("express");
const { userRouter } = require("./routes/user.routes");
const { categoryRouter } = require("./routes/category.routes");

const app = express();


app.use(express.json());
app.use(userRouter);
app.use(categoryRouter);

app.listen(3000, () => {
    console.log("Servidor roodando na porta 3000.")
})