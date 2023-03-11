var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const userModel = require("../../../models/userModel");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.jwtPassword;
passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await userModel.findOne({_id: jwt_payload.userid}).select("-pasword");
      console.log(user)
      if (!user) {
        done(null, false);
        // or you could create a new account
      }
      done(null, user); //req.user=user
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = IsAuth = () =>
  passport.authenticate("jwt", { session: false });
