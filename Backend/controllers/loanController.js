import pool from '../config/db.js';

export const getProducts = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *',
      [name, price, description]
    );
    res.status(201).json({ message: 'Product added', product: rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
