const express = require("express");
const app = express();
const cors = require("cors"); //Line 1
const port = 3000;
app.use(cors()); //Line 2

app.get('/', (req, res) => {
    res.send("Arithmetic service - hello World!");
});

app.listen(port);

app.get("/add/:n/:m", (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});