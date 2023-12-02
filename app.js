const express = require("express")
const app = express();

const { connectDatabase } = require("./database/dabasase");
const Blog = require("./model/blogModel");


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDatabase()

app.use(express.static("public"))

//GET API
app.get("/", (req, res) => {
    res.render('home.ejs')
})


//GET API => /blogs (All blogs) 
app.get("/blogs", async (req, res) => {

    const blogs = await Blog.find()

    if(blogs.length == 0) {
        res.json({
            status : 404,
            message : "Empty Blogs"
        })

    } else {

        res.json({
        status : 200,
        message : "All Blogss",
        data : blogs
    })
    }    
})


app.get("/blogs/:id", async (req, res) => {

    const id = req.params.id

    const blog = await Blog.findById(id)


    if(blog){
    res.json({
        status: 200,
        message : "successfull",
        data : blog
    })
    }else{
        res.json({
            status : 404,
            message : "Data could not be found"
            
        })
    }
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