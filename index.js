const express = require("express")
const app= express()
const ShanmukhRoutes = require("./routes/Routes")

app.use(express.json())

app.use("/api/website",ShanmukhRoutes)


app.listen(8888,()=>{
    console.log("server is running on port 8888")
})