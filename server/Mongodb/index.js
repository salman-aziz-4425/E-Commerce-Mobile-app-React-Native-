const express=require('express')
require('./db/mongoose')
var cors=require('cors')
const User=require('./model/UserInfo')
const app=express()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const Middleware=require('./Middleware/Middleware')
const Product= require('./model/Product');
app.use(express.json())
app.use(cors())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.post('/InsertInfo',async (req,res)=>{
    console.log("Checking :- ",req.body);
    const data=new User(req.body)
    console.log(data)
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(data.password,salt);

    const newData=new User({
        Username:data.Username,
        password:hash
    })
    try{
        await newData.save()
        res.status(200).send()

    }catch(error){
        console.log(error)
    }
})

app.get('/login',async (req,res)=>{
   const username=req.query.Username
   const data=await User.findOne({Username:username})
    try{
       if(username==data.Username){
        const token=jwt.sign({_id:data._id.toString()},'Thisismyapp')
          res.status(200).send({
            data,
            token:token
          })
       }
       else{
        throw new Error('Invalid info')
       }

    }catch(error){
        res.status(400).send()
        console.log(error)
    }
})

app.post('/addProduct',async (req,res)=>{
  console.log(req.body)
  try{
        const data=new Product(req.body)
        console.log(data)
         await data.save()
         res.status(200).send()
    }catch(error){
      res.status(400).send("error")
  }
})
app.get('/productInfo',async (req,res)=>{
  const data=await Product.find()
         console.log(data)
   try{
          res.status(200).send(data)
     }catch(error){
       res.status(400).send("error")
   }
})
app.listen(3001,()=>{
    console.log('Welcome to port 3001')
})