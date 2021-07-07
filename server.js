let express = require('express')

let app = express()

let PORT =  process.env.PORT || 3000

let date = new Date();
let day = date.getDay();
let hour = date.getHours();

app.use(function(req, res, next){
    if(day >= 1 && day <=5 && hour >= 9 && hour <= 17){next()}
    else {res.send("Nos services sont uniquement disponibles du lundi au vendredi de 09h00 à 17h00. Merci de votre compréhension.")}
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
    res.sendFile(__dirname + '/public/services.html')
    res.sendFile(__dirname + '/public/contact.html')
})

app.use(express.static(__dirname + "/public"))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})