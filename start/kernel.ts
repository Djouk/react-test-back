import server from '@adonisjs/core/services/server'

server.use([
  () => import('@adonisjs/cors/cors_middleware'),
  () => import('#middleware/request_timeout_middleware'),
])

server.errorHandler(() => import('#exceptions/handler'))
