const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();
const PORT =process.env.PORT||3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to receive data
app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully!' });
});

app.get('/',(req,res)=>{
    res.status(200).send("Server live")    
})
app.get('/data',(req,res)=>{
    res.status(200).send("Server live")    
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
