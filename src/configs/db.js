const mongoose=require('mongoose');

const connect= ()=>{

    return mongoose.connect("mongodb+srv://pai_backend:pai_backend@cluster0.bj0in.mongodb.net/pai_backend?retryWrites=true&w=majority")
}
module.exports= connect