import { Sequelize } from 'sequelize';
import pino from 'pino';

const logger = pino();

export const sequelize = new Sequelize({
  username: 'postgres',
  password: 'chemi@Q',
  database: 'chemiq',
  host: 'localhost',
  dialect: 'postgres',
  logging: msg => logger.info(msg),
});
