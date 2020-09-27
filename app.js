const express = require('express')
 const path=require('path')
const sayhay=require('./views/sayhay')
const studentt=require('./routes/students')
const { json } = require('body-parser')

//invoke express
const app = express()
//init middlewar parser=> bech ywaly ya5ou les donner fi bady parser nest79ha wa9t lnheb na5ou donner min front
app.use(express.json())

 // middleware static =>eli fih page mta3 contact.html index.html
app.use(express.static(path.join(__dirname,'views')))

//creation dun middelwar sayhay
app.use(sayhay);
// creation dun middlewar au fichier studentss
app.use('/std',studentt)






 // server side 
app.listen(3000,(err)=>{
    if (err){
        console.error(err);
    }else{
        console.log('server is app and Running...');
    }
})