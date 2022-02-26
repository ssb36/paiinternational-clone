const mongoose=require("mongoose")

const apischema =new mongoose.Schema({

    id :{type:"Number",required:true,unique:true},
    title:{type:"String",required:true},
    price:{type:"Number",required:true},
    description:{type:"String",required:true},
    category:{type:"String",required:true},
    image:{type:"String",required:true},

},{
    versionKey:false,
    timestamps:true
}

)
module.exports=  mongoose.model("api",apischema)