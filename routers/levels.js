const express = require('express')
const router = express.Router()

router.get("/",function(req,res){
    res.json({
        error: "Not implemented"
    })
})

router.get("/")
module.exports = router;