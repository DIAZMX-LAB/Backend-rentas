const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

let properties = [];
let payments = [];
let reviews = [];

app.get('/api/properties', (req, res) => res.json(properties));
app.post('/api/properties', (req, res) => {
  properties.push(req.body);
  res.status(201).json({ message: 'Propiedad registrada' });
});

app.get('/api/payments', (req, res) => res.json(payments));
app.post('/api/payments', (req, res) => {
  payments.push({ ...req.body, date: new Date().toLocaleDateString() });
  res.status(201).json({ message: 'Pago registrado' });
});

app.get('/api/reviews', (req, res) => res.json(reviews));
app.post('/api/reviews', (req, res) => {
  reviews.push(req.body);
  res.status(201).json({ message: 'Reseña registrada' });
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
