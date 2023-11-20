import { Sequelize, Dialect } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME ?? 'mydb',
  process.env.USER ?? 'root',
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT as Dialect,
    pool: {
      max: parseInt(process.env.POOL_MAX ?? '5'),
      min: parseInt(process.env.POOL_MIN ?? '0'),
      acquire: parseInt(process.env.POOL_ACQUIRE ?? '30000'),
      idle: parseInt(process.env.POOL_IDLE ?? '10000')
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully'))
  .catch(err => console.error('Error connecting to the database', err));

sequelize.sync({ force: false })
  .then(() => console.log('Database syncronized successfully'))
  .catch(err => console.error('Error trying to syncronize the database', err));
