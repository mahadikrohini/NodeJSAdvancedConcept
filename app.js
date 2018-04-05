const express = require('express');
const authRouter = require('./routers/auth-routes')
const app = express();


//set up view engine...
app.set('view engine','ejs');

//set up routes
app.use('/auth', authRouter)

//Create Home Route...
app.get('/',(req, res)=>{
    res.render('home')
})

app.listen(3000,()=>{
    console.log('listening for requests on port 3000')
})