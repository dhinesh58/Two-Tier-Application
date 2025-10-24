const express = require('express');
const { Client } = require('pg');
const app = express();

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'postgres'
});

client.connect();

app.get('/', async (req, res) => {
    const result = await client.query('SELECT NOW() AS time');
    res.send(`<h1>Welcome to Azure 2-Tier App</h1><p>DB Connected: ${result.rows[0].time}</p>`);
});

app.listen(8080, () => console.log('App running on port 8080'));
