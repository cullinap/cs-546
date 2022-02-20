const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')))

// var person = [
//     {
//         name: 'Jeff',
//         age: 38
//     },
//     {
//         name: 'Sarah',
//         age: 40
//     }
// ]

// app.get('/', function(req, res){
//     res.json(person)
// });

// app.get('/', function(req, res) {
//     res.send('Hello')
// });

app.get('/', function(req, res) {
    res.render('index')
});

app.listen(3000, function(){
    console.log(`server started on port 3000...`)
})