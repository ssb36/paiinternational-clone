const express = require('express')

const connect=require("./configs/db.js")

const app = express()
app.use(express.json())

const productController= require("./controllers/product.controller.js")

app.use("/products",productController)


app.listen(5502, async function () {

    try{

        await connect()
        console.log("proceed")
    }
    catch(e){
        console.log(e.message)
    }
})