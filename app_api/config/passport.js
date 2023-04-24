const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const users = mongoose.model('users');

passport.use(new LocalStrategy(
    // Tell Passport which user property is used as the username
    { usernameField: 'email'},

    //provide passport a functon to use for validating users
   async (username, password, done) => {
        try {
            const user = await users.findOne({ email: username });

            //if no user matches the email, fail
            if(!user) {
                return done(null, false, { messaage: 'Unrecognized username' });
            }

            //Test the password
            if(!user.validatePassword(password)) {
                return done(null, false, { message: 'Incorrect Password' });
            }

            //Everything passed, log them in
            return done(null, user); 
        } catch (e) {
            return done(e);
        }
    }
))