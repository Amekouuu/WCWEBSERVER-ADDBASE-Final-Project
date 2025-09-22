
const express = require('express');
const app = express();
const path = require('path');
const serv = process.env.serv || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

// placeholder routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/signup', (req, res) => {
  res.send('<h1>Signup Page</h1>');
});

app.get('/dashboard', (req, res) => {
  res.send('<h1>Dashboard/Planner page</h1>');
});

app.get('/calendar', (req, res) => {
  res.send('<h1>Calendar page</h1>');
});

app.get('/profile', (req, res) => {
  res.send('<h1>User Profile page</h1>');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(serv, () => {
  console.log(`Server running on http://localhost:${serv}`);
});
