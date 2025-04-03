const router = require("express").Router();
const Product = require("./model");

router.post("/product", (req, res) => {
    const { name, price, stock } = req.body;
    Product.create({ name, price, stock, status: true })
        .then((result) => res.json(result))
        .catch((error) => res.json(error));
});

router.get("/product", (req, res) => {
    Product.find()
        .then((result) => res.json(result))
        .catch((error) => res.json(error));
});

module.exports = router;
