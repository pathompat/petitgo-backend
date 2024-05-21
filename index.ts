import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import * as express from 'express'
import { AppModule } from './src/app.module'
import { ValidationPipe } from '@nestjs/common'

import { config } from 'firebase-functions'
import { onRequest } from 'firebase-functions/v2/https'
import { credential } from 'firebase-admin'
import { initializeApp } from 'firebase-admin/app'

const expressServer = express()

initializeApp({
  credential: credential.cert(config().petitgo_backend_config),
})

const createFunction = async (expressInstance): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  )
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.init()
}

export const api = onRequest(async (request, response) => {
  await createFunction(expressServer)
  expressServer(request, response)
})
