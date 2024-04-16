require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors"); //Line 1
app.use(cors()); //Line 2
const { add } = require("./arithmetica");

app.get('/', (req, res) => {
    res.send("Arithmetic service - hello World!");
});

if (!process.env.PORT) {
    console.log("Error: no PORT specified");
    process.exit(1);
}

//const port = 3000;
//app.listen(port);
const port = process.env.PORT;
app.listen(port);

app.get("/add/:n/:m", (req, res) => {
    res.json(add(Number(req.params.n), Number(req.params.m)));
});

app.get("/sub/:n/:m", (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});