import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({user:"Subarna Mainali" , message: 'Hello I am live!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});