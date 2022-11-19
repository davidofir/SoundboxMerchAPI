const express = require("express");
const app = express();
const cors = require('cors');
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const { getCatalog } = require("merchnow-api-node")

app.get('/:artist',cors(),async(req,res)=>{

    const results = await getCatalog(req.params.artist)
    console.log(results)
    await res.json(results)
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})