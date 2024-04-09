const path = require('path');
const express = require('express');
const rootDir = require('./util/path');
console.log(rootDir);
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));



app.get('/', (req, res) => {
    console.log('root hit');
    res.sendFile(path.join(rootDir, 'views', 'app.html'));
});

app.get('/button', (req, res) => {
    console.log('button pressed');
    res.send("<div>Eric</div>");
})
app.listen(3000);