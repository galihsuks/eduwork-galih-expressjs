const express = require("express");
const app = express();
const port = 8083;
const productRouter = require("./app/product/routes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Tugas Eduwork");
});

app.use("/product", productRouter);

app.listen(port, () => {
    console.log(`Backend Absensi app listening on port ${port}`);
});
