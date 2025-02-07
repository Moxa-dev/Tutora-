import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tutorialRoutes from './routes/tutorialRoutes';
import { errorHandler } from './middleware/errorHandler';

// Initialize Express App
const app: Application = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/tutorials', tutorialRoutes);

// Centralized Error Handling
app.use(errorHandler);

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tutorials';
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  });

// Start the Server
const PORT: number = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});