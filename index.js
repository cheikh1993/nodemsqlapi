const express = require("express")
const UserRoute = require("./routes/user")
const routerPost = require("./routes/post")
const cors = require("cors")
const app = express()
app.use(cors())

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
    
});

app.use("/api/user", UserRoute)
app.use("/api/post", routerPost)
app.listen(3000, () => {
    console.log("connected");
})