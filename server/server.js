const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./model/registerSchema');
require('dotenv').config();
const bcrypt = require('bcrypt');

const app = express();
app.use(cors({
  origin: 'http://localhost:3002', // Use "http" instead of "https" for local development
  methods: ['POST', 'GET'],
  credentials: true
}));

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello');
});

app.post('/signup', (req, res) => {
  const {name,email,password} = req.body;
  bcrypt.hash(password, 10)
  .then((hash)=>{
    RegisterModel.create({name, email, password:hash})
    .then((user)=>res.json(user))
    .catch((error)=>res.json(error))

  })
  .catch((error)=>res.json(error.message))
})

app.post('/login', (req, res) => {
  const {email,password} = req.body
  RegisterModel.findOne({email: email})
  .then(user=>{
    bcrypt.compare(password, user.password,(err,result)=>{
      if(result){
        res.json("success");
      } else {
        res.json("password is incorrect");
      }
    } )
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json("Internal Server Error");
  });
})



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
