import passport from 'passport';
import { Strategy as jwtStrategy, ExtractJwt } from 'passport-jwt';
import { Errors } from '../errors/errors';
import { userService } from '../services/user.service';
import { User } from '../models/user.model';
import { UserDto } from '../dto/user.dto';

const jwtOption = {
  secretOrKey: 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  'jwt',
  new jwtStrategy(jwtOption, async (jwtPayload, done) => {
    const id = jwtPayload.id;

    if (!id) throw Error(Errors.WrongToken);

    const user: User | null = await userService.getById(id);

    if (!user) return done(false, null);

    return done(false, new UserDto(user));
  }),
);

export const jwtMiddleware = passport.authenticate('jwt', { session: false });
