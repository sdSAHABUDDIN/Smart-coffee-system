import express from 'express';
import dotevn from 'dotenv';
import order from './router/orderRoute.js';
dotevn.config();

const app = express();
app.use(express.json());
const PORT=process.env.PORT || 3000;

app.use("/api/orders",order);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);
});