import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  TZ: Env.schema.enum.optional(['UTC'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string.optional(),
  LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace'] as const),
  FRONTEND_ORIGINS: Env.schema.string(),
  REQUEST_TIMEOUT_MS: Env.schema.number(),
})
