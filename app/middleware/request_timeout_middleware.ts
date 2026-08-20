import { serverConfig } from '#config/server'
import { Exception } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RequestTimeoutMiddleware {
  async handle(_ctx: HttpContext, next: NextFn) {
    let timeout: NodeJS.Timeout | undefined

    const timeoutPromise = new Promise<never>((_, reject) => {
      timeout = setTimeout(() => {
        reject(
          new Exception('Request timed out.', {
            status: 503,
            code: 'E_REQUEST_TIMEOUT',
          })
        )
      }, serverConfig.requestTimeoutMs)
    })

    try {
      await Promise.race([next(), timeoutPromise])
    } finally {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }
}
