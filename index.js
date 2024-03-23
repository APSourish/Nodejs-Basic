const express = require('express')
const bodyParser = require('body-parser')
let studentModel = require('./schema')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.listen(5000, () => {
    console.log("Connected to port 5000")
})

mongoose.connect("mongodb://localhost:27017/studentRecord",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb connected Successfully")
}).catch(() => {
    console.log("Mongodb connection fasiled")
})


app.get('/',(req,res) => {
    res.send("success")
}) 

app.post('/insert',async (req,res) => {
    let data = req.body
    let dataToInsert = {
        name: data.name,
        mobileno:data.mobileno,
        bloodGroup:data.bloodGroup,
        address:data.address
    }
   let result = new studentModel(dataToInsert)
   await result.save();
    res.send(dataToInsert)
})

app.get('/getdata',async (req,res) => {
    let result = await studentModel.find({},{'_id':0, 'name':1});
    res.send(result);
})