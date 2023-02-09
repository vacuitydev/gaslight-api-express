const express = require('express')
const mongoose = require('mongoose')
const res = require('express/lib/response')
var cors = require('cors')

require('dotenv').config()
const port = (process.env.API_PORT||3000)

const app = express()
app.use(cors())

async function connectToMongo(){
    await mongoose.connect('mongodb://127.0.0.1:27017/gaslight');
    const levelSchema = new mongoose.Schema({
        name: String,
        levelString: String,
        played: Number,
        rating: Number
    })
    const Level = mongoose.model('levels', levelSchema)
    Level.findOne({}, (err, dat)=>console.log(dat))
}
connectToMongo()


app.get('/level', (req, res)=>
    res.json(JSON.stringify(
        {
            "_id": {
              "$oid": "63d8b22b59304a762b40db84"
            },
            "levelString": "corner,wall90,wall90,wall90,wall90,wall90,corner90;wall,floor,floor,floor,floor,floor,wall;wall,floor,floor,floor,floor,floor,wall;wall,floor,floor,floor,floor,floor,wall;corner270,wall90,wall90,wall90,wall90,wall90,corner180;",
            "played": "0",
            "difficulty": "3",
            "rating": "2",
            "levelAssetDB": "defaultLevelAssetDB"
        }))
    )
app.get('/levels', (req,res)=>{
    return res.send(
        {
            root:[
                {
                    id:1
                },{
                    id:2
                }
            ]
        }
    )
})
app.listen(port,()=>{
    console.log("Started listening on", port)
})


