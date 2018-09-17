const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;

const knex = require('./knex');
const { jwt } = require('./vars');

const options = {
  secretOrKey: jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  issuer: jwt.issuer,
};

const verify = async (payload, done) => {
  try {
    const [user] = await knex
      .select('*')
      .from('users')
      .where('id', payload.sub)
      .limit(1);

    if (!user) {
      const err = new Error('Unauthorized');
      err.statusCode = 401;
      throw err;
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

exports.jwt = new JwtStrategy(options, verify);
