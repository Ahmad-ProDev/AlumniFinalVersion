//////////// UPDATE CHECK
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');




///////////// MONGO DB CONNECTION
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', true);
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("DB Connected!");
});
///////////////////////////////////////


var corsOptions = {
  origin: process.env.FRONTEND_URI,
  optionsSuccessStatus: 200 
}
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }))
app.use(cors(corsOptions));



const api = require('./routes/api/api');
app.use('/api', api);

const imgApi = require('./routes/api/imgApi');
app.use('/img', imgApi);

///////////////////////////////////////



app.get('/json', (req, res) => {
  res.status(200).json({
    workin: true
  })
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running!");
})