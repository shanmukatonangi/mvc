const express = require("express")
const router = express.Router()
const ControllerFuns= require("../controllers/ControllerFunctions")
// console.log(ControllerFuns)


router.get("/",ControllerFuns.Getfunc)
    
    router.post("/",ControllerFuns.Postfunc)
router.get("/:id",ControllerFuns.Getone) // localhost:8888/api/website/:id
    router.delete("/:id",ControllerFuns.Deletefunc)

    router.put("/:id",ControllerFuns.Putfunc)

    router.patch("/:id",ControllerFuns.Patchfunc)

    

module.exports=router