const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategies');
const Jwttrategy = require('./strategies/jwt.strategies');

passport.use(LocalStrategy);
passport.use(Jwttrategy);