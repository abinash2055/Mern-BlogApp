import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

mongoose
  .connect(process.env.MONGODB_CONN, { dbName: 'BlogApp' })
  .then(() => console.log('Database Connected...'))
  .catch((err) => console.log('Database connection failed....', err));

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
