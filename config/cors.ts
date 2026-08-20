import env from '#start/env'
import { defineConfig } from '@adonisjs/cors'

const configuredOrigins = env
  .get('FRONTEND_ORIGINS')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const corsConfig = defineConfig({
  enabled: true,
  origin: configuredOrigins,
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
  headers: true,
  exposeHeaders: [],
  credentials: false,
  maxAge: 90,
})

export default corsConfig
