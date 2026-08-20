import env from '#start/env'

export const serverConfig = {
  requestTimeoutMs: env.get('REQUEST_TIMEOUT_MS'),
}
