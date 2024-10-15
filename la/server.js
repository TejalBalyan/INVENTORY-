const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
// const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 50000,  // Increase the timeout duration
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Warehouse Management API!');
});

// Define your routes (items and locations)
const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);

const locationsRouter = require('./routes/locations');
app.use('/api/locations', locationsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
