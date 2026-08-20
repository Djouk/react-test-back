import env from '#start/env'
import { defineConfig as defineHttpConfig } from '@adonisjs/core/http'

const appConfig = {
  appKey: env.get('APP_KEY'),
  http: defineHttpConfig({
    generateRequestId: true,
    allowMethodSpoofing: false,
    useAsyncLocalStorage: false,
  }),
  timezone: 'UTC',
}

export default appConfig
