import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf, prettyPrint } = format
import path from 'path'

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  return `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} [${label}] ${level}: ${message}`
})
const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'University Management Backend' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'University Management Backend' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})
export { logger, errorLogger }
