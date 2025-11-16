const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const articleRoutes = require('./routes/articles');
const Article = require('./models/article');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/articles', articleRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Yhdistetty MongoDB:hen'))
  .catch(err => console.error(err));

// Artikkelin lisääminen
app.get('/articles/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ error: 'Artikkelia ei löytynyt' });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Virhe haettaessa artikkelia' });
  }
});

// Artikkelin muokkaus
app.put('/articles/:id', async (req, res) => {
  try {
    const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Virhe muokkauksessa' });
  }
});

// Artikkelin poisto
app.delete('/articles/:id', async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artikkeli poistettu' });
  } catch (err) {
    res.status(500).json({ error: 'Virhe poistossa' });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Palvelin käynnissä portissa ${PORT}`));
