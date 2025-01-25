import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL');
  } catch (err) {
    throw new Error('Failed to connect to PostgreSQL');
  }
};

export default pool;
