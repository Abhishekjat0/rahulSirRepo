const express = require('express');
const app = express();
const port = 8000;
const filePath = "index.html";
const fs = require("fs");
app.get("/", (req, res) => {
    res.end("Hello Abhishek")
    fs.readFile(filePath, "utf8", (err,data) => {
        // console.log(data);
        const modifiedContent = data.replace('Hello',"there")
    })
})
app.get("/home", (req, res) => {
    res.end("Hello Abhishek")
})
app.get("/about", (req, res) => {
    res.end("Hello Abhishek")
})
app.post("/contact", (req, res) => {
    res.end("hello");
})


app.listen(port, () => {
    console.log("servercreate");
});