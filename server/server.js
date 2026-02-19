import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3001

const app = express();

app.get('/', (req, res) => {
    res.send('this is the server')
});

app.listen(PORT, (err) => {
    console.log(`server is running on http://localhost:${PORT}`)
})