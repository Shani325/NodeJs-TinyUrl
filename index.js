import express from 'express'
import connectDB from './DB.js';
import LinkModel from './Models/LinkModel.js';
import bodyParser from 'body-parser'

connectDB()
const app=express()
app.use(bodyParser.json())
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello world!");
})

app.post('/',async(req,res)=>{
    console.log('post')
    const newLink= await LinkModel.create({orginalUrl:req.body.url});
    res.send(`http://localhost:3000/ShortUrl/${newLink.id}`)
})

app.get('/ShortUrl/:id',async(req,res)=>{
    console.log('getById',req.params.id)
    const original=await LinkModel.findById(req.params.id)
    console.log(original.orginalUrl)
    res.redirect(original.orginalUrl);
})

app.listen(port,()=>{
    console.log(`Node Project listening on http://localhost:${port} `)
})