const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});