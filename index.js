
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const PORT=process.env.PORT || 3000
app.use(express.json())

let ts = Date.now();

const time = new Date().toLocaleString();
const today = new Date();

const timpstamp= `Date ${today.getDate()}-${
  today.getMonth() + 1
}-${today.getFullYear()}, Time ${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`;


fs.writeFile(`./TextFiles/${timpstamp}.txt`,time,(err) => {
    if(err) throw err
    console.log('File Created!!!')

})
app.post('/',function(req,res){
    res.json(timpstamp)
})
app.get("/", function (request, response) {
    fs.readdir("./TextFiles/", (err, file) => {
        if (err) {
            console.log("files not found" + err);
            response.send("files not found" + err);
        }
        console.log("Available files:" + file);
        response.send(file);
    });
})
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
