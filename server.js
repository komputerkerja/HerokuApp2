const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));
app.get('/api', (req, res) => {
    res.json({data: 'ok'});
});

app.listen(PORT, console.log(`server runing on port ${PORT}`));