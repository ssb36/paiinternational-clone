const express = require('express')

const connect=require("./configs/db.js")
const productController = require("./controllers/product.controller.js")

const userController = require("./controllers/user.controller");
const app = express()
app.use(express.json())

app.use(express.urlencoded({
    extended: true
}));


app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.use("/products",productController)

app.get("/checkout", async (req, res) => {
    try {
        res.render("checkout");
    }
    catch (e) {
        console.log(e.message);
    }
});

app.get("/home", async (req, res) => {
    try {
        return res.render("index.ejs");
    }
    catch (e) {
        console.log(e.message)
    }
})
// app.get("/login", async (req, res) => {
//     try {
//         console.log("i am in login route")
//         return res.render("login_and_singup");
//     }
//     catch (e) {
//         console.log(e.message)
//     }
// });
app.use("/login", userController);
// app.use("/try", checkingController);
app.listen(5502, async function () {

    try{

        await connect()
        console.log("proceed")
    }
    catch(e){
        console.log(e.message)
    }
})