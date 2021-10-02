const express = require('express');
const app = express();
const fs = require('fs');

const PORT= process.env.PORT || 3001;

app.get("/api", (req,res) => {
    fs.readFile('./api/api.json' ,'utf8', 
    function(err, data)
    {
        const objData = JSON.parse(data);
        res.send(objData);
    }); 
})

app.listen(PORT, () => {
    console.log(`The server has started at port : ${PORT}`);
})