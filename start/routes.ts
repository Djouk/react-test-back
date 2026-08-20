import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    name: 'react-test-back',
    status: 'ok',
  }
})

router.get('/health', async () => {
  return {
    status: 'ok',
    timezone: 'UTC',
  }
})
