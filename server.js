const express = require('express') 
const app = express()

app.listen(3000, function(){
    console.log("test debs")
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs')


// console.log("test debs")