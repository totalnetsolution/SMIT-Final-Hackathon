import pool from '../config/db.js';

export const getDashboard = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [req.userId]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
