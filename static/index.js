const path = require('path');
const express = require('express');
const app = express();
const static= path.join(__dirname,"./public");
console.log(__dirname);
console.log(static);
app.use(express.static(static));
app.listen(8000);