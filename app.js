const express = require('express');

let app = express();
let PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Deployment DONEDONE');
});

app.listen(PORT, ()=> {
    console.log('server started at ' + PORT);
})
