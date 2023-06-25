const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./model/registerSchema');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Use "http" instead of "https" for local development
  methods: ['POST', 'GET'],
  credentials: true
}));

mongoose.connect('mongodb+srv://jeyamaha98:jeyamaha@cluster0.r9yfyga.mongodb.net/Register', {
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

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  RegisterModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json('Already registered');
      } else {
        RegisterModel.create({ name: name, email: email, password: password })
          .then(result => res.json(result))
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});