import passport from "passport";
import { Strategy as jwtStrategy, ExtractJwt } from "passport-jwt";
import { Errors } from "../errors/errors";
import { userService } from "../services/user.service";

const jwtOption = {
  secretOrKey: process.env.JWT_KEY + "",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  "jwt",
  new jwtStrategy(jwtOption, async (jwtPayload, done) => {
    const id = jwtPayload.id;

    if (!id) throw Error(Errors.WrongToken);

    const user = await userService.getById(id);

    if (!user) throw new Error(Errors.WrongToken);

    return done(false, user);
  })
);

export const jwtMiddlewate = passport.authenticate("jwt", { session: false });
