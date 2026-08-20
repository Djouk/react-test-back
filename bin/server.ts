import 'reflect-metadata'

import { Ignitor, prettyPrintError } from '@adonisjs/core'

const APP_ROOT = new URL('../', import.meta.url)

new Ignitor(APP_ROOT, { importer: (filePath) => import(filePath) })
  .httpServer()
  .start()
  .catch((error) => {
    process.exitCode = 1
    prettyPrintError(error)
  })
