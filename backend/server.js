import express from 'express';
import dotevn from 'dotenv';
dotevn.config();

const app = express();
const PORT=process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);
});