const qrcode = require('qrcode')
const generateQR = require('./qrcode')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// have to use urlencoded to populate the req.body, other remains undefined
app.use(express.urlencoded({extended: true})) 

app.use(express.json()); //body-parser deprecated, now use express.json()

app.get('/', (req, res) => {
    res.send("Welcome to the API!")
})

app.post('/scan', (req, res)=> {
    const userDetails = [req.body.name, 
    req.body.email,
    req.body.twitter, 
    req.body.github]
    generateQR(userDetails)
})
app.listen(port, ()=> console.log(`Server is running on port ${port}...`))