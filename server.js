const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

//look for an environment variable called PORT (needed later for deployment), if none exists default to 5000
const PORT = process.env.PORT || 5000; 

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));