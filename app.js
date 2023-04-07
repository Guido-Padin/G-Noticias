//------Requires------        
const path = require('path');
const express = require('express');
const app = express();

//------Levantando el Servidor------
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log("Server start in http://localhost:"+app.get("port")));

app.get("/",(req,res) => res.sendFile(path.resolve(__dirname,"./views/index.html")));
