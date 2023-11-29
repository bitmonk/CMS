const app = require("express")();

const { connectDatabase } = require("./database/dabasase");

connectDatabase()
//GET API
app.get("/", (req, res) => {
    res.json({
        status : 200,
        message : "Success"
    })
})


app.listen(3000, () => {
    console.log("Server started on port 3000..")
})