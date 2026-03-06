import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pkg from "pg";

const { Pool } = pkg;

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const PORT = process.env.PORT || 3005;

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://tsa-three-eosin.vercel.app/",
}));

app.get('/', (req, res) => {
  res.send('this is the server');
});

app.get("/api/resources", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM resources ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching resources:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});