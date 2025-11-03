const express = require('express');
const cors = require('cors');
const app = express();

const nilaiRoutes = require('./routes/nilaiRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/nilai', nilaiRoutes);

app.get('/', (req, res) => res.send('API Ready'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));