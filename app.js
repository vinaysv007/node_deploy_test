const express = require('express');

let app = express();
let PORT = process.env.PORT || 8000;

app.use('/', (req, res) => {
    res.send('Deployment done');
});

app.listen(PORT, ()=> {
    console.log('server started at ' + PORT);
})