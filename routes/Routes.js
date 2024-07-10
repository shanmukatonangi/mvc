const express = require("express")
const router = express.Router()
const ControllerFuns= require("../controllers/ControllerFunctions")
// console.log(ControllerFuns)


router.get("/",ControllerFuns.Getfunc)
    
    router.post("/",ControllerFuns.Postfunc)

    router.delete("/",ControllerFuns.Deletefunc)

    router.put("/",ControllerFuns.Putfunc)

    router.patch("/",ControllerFuns.Patchfunc)

    

module.exports=router