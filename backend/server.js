import express from 'express';
import dotevn from 'dotenv';
import order from './router/orderRoute.js';
import brewRouter from './router/brewRoute.js';
import cors from "cors"

dotevn.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 3000;

app.use("/api/orders",order);
app.use("/api",brewRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT,'0.0.0.0', () => {  
  console.log(`Server is running on http://localhost:${PORT}`);
});