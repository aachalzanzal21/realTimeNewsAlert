const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const newsRoutes = require('./routes/newsRoutes');

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/news', newsRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send("News Alert API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
