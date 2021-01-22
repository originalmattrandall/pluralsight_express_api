import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Models
import Book from './models/bookModel.js';

// Routes
import routes from './routes/bookrouter.js';

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI')
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes(Book));

app.get('/', (req, res) => {
  res.send('Welcome to my api');
});

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});