import dotenv from 'dotenv';
//  Load environment variables first
dotenv.config({ quiet: true });

import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import jobRoutes from './routes/jobRoutes.js'
//  Connect to MongoDB (after dotenv.config)
connectDB();

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));        //  Correct use of morgan
app.use(express.json());       //  JSON parser middleware

app.use('/auth',authRoutes);
app.use('/jobs',jobRoutes);
// Define your routes here (example)
app.get('/', (req, res) => {
  res.send('Job Portal API is running...');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on PORT: ${PORT}`);
});
