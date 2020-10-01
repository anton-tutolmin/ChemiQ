import passport from "passport";
import { Strategy as jwtStrategy, ExtractJwt } from "passport-jwt";

const jwtOption = {
  secretOrKey: "secret",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  "jwt",
  new jwtStrategy(jwtOption, (jwtPayload, done) => {
    return done(false, { username: "andrey", id: 17 });
  })
);

export const jwtMiddlewate = passport.authenticate("jwt", { session: false });
