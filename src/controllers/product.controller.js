const express=require("express")

const router =express.Router()

const Product = require("../models/product.model.js")


router.get("", async (req, res) => {

    try{
        const product = await Product.find().lean().exec()
        res.status(200).send(product)

    }
    catch(e){
        res.status(500).send(e.message)
    }
})
router.post("", async (req, res) => {

    try{
        const product = await Product.create(req.body)
        res.status(200).send(product)

    }
    catch(e){
        res.status(500).send(e.message)
    }
})
router.patch("/:id", async (req, res) => {

    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(product)

    }
    catch(e){
        res.status(500).send(e.message)
    }
})
router.get("/:id", async (req, res) => {

    try{
        const product = await Product.findById(req.params.id).lean().exec()
        res.status(200).send(product)

    }
    catch(e){
        res.status(500).send(e.message)
    }
})
router.delete("/:id", async (req, res) => {

    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).send(product)

    }
    catch(e){
        res.status(500).send(e.message)
    }
})
module.exports= router