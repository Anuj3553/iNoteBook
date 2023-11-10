const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
connectToMongo();
const app = express();
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin : "https://inotebookbackend-jqmb.onrender.com",
    methods : ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
});