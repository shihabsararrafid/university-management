import mongoose from 'mongoose'
import app from './app'
import config from './../config/index'
import { logger, errorLogger } from './shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Connected to database')
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    // console.log(`Failed to connect due to  ${error.message}`)
    errorLogger.error(`Failed to connect due to  ${error.message}`)
  }
}
bootstrap()
