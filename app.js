const express = require("express")
const app = express();

const { connectDatabase } = require("./database/dabasase");
const Blog = require("./model/blogModel");

app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDatabase()

//GET API
app.get("/", (req, res) => {
    res.json({
        status : 200,
        message : "Success"
    })
})


//GET API => /blogs (All blogs) 
app.get("/blogs", async (req, res) => {

    const blogs = await Blog.find()

    res.json({
        status : 200,
        message : "All Blogs",
        data : blogs
    })
})


//CREATE BLOG API
app.post("/createBlog", async (req, res) => {
    console.log(req.body)

    await Blog.create({
        title : req.body.title,
        subTitle : req.body.subTitle,
        description : req.body.description
    })



    res.json({
        status : 200,
        message : "Blog created successfully"
    })
})


app.listen(3000, () => {
    console.log("Server started on port 3000..")
})