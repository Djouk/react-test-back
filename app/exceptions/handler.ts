import app from '@adonisjs/core/services/app'
import { ExceptionHandler } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import type { HttpError } from '@adonisjs/core/types/http'

type ErrorLike = {
  code?: string
  message?: string
  status?: number
  statusCode?: number
}

export default class HttpExceptionHandler extends ExceptionHandler {
  protected debug = !app.inProduction

  async handle(error: unknown, ctx: HttpContext) {
    const status = this.getStatus(error)
    const message = status >= 500 ? 'An unexpected error occurred.' : this.getMessage(error)

    return ctx.response.status(status).send({
      error: {
        message,
        status,
      },
    })
  }

  async report(error: unknown, ctx: HttpContext) {
    if (this.shouldReport(error as HttpError)) {
      return super.report(error, ctx)
    }
  }

  private getStatus(error: unknown) {
    const candidate = error as ErrorLike
    const status = candidate.status ?? candidate.statusCode

    if (typeof status === 'number' && status >= 400 && status <= 599) {
      return status
    }

    if (candidate.code === 'E_ROUTE_NOT_FOUND') {
      return 404
    }

    return 500
  }

  private getMessage(error: unknown) {
    const candidate = error as ErrorLike

    return candidate.message || 'Request failed.'
  }
}
