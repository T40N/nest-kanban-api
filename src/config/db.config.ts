import { registerAs } from '@nestjs/config';

export const dbConfig = registerAs('db', () => {
  const {
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
  } = process.env;

  return {
    host: POSTGRES_HOST,
    port: POSTGRES_PORT,
    db: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  };
});
