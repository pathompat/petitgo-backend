import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import * as express from 'express'
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { AppModule } from './src/app.module'
import { ValidationPipe } from '@nestjs/common'

const expressServer = express()

admin.initializeApp({
  credential: admin.credential.cert(functions.config().petitgo_backend_config),
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
export const api = functions.https.onRequest(async (request, response) => {
  await createFunction(expressServer)
  expressServer(request, response)
})
