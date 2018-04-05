const passport = require('passport')
const GoogleStratergy = require('passport-google-oauth20')

passport.use(new GoogleStratergy({
    //option for the google strategy
}),()=>{
    //passport callback function
})
