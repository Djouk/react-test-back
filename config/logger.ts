import env from '#start/env'
import { defineConfig } from '@adonisjs/core/logger'

const loggerConfig = defineConfig({
  default: 'app',
  loggers: {
    app: {
      enabled: true,
      name: 'react-test-back',
      level: env.get('LOG_LEVEL'),
    },
  },
})

export default loggerConfig
