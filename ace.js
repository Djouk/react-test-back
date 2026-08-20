#!/usr/bin/env node

import { Ignitor, prettyPrintError } from '@adonisjs/core'

const APP_ROOT = new URL('./', import.meta.url)

new Ignitor(APP_ROOT, { importer: (filePath) => import(filePath) })
  .ace()
  .handle(process.argv.splice(2))
  .catch((error) => {
    process.exitCode = 1
    prettyPrintError(error)
  })
