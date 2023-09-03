import express from 'express';
import diaryRouter from './routes/diaries';
const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json

const PORT = 3000; // se puede hacer con un dotenv

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

// http://localhost:3000/api/diaries
app.use('/api/diaries', diaryRouter); 


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});