import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => {
  return {
    nodeEnv:
      (process.env.NODE_ENV as 'development' | 'test' | 'production') ??
      'development',
    port: Number(process.env.PORT ?? 3000),
  };
});
