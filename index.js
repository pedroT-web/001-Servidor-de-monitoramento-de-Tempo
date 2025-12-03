const express = require('express')
const app = express()

app.get('/status', (req, res) =>{
    res.send("serviço operacional")
})
 
app.get('/horaatual', (req, res)=>{
    res.send("22:21 hora de ir embora")
})

app.listen(3000)