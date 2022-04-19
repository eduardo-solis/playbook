require('./patcher') // Llamas este módulo que modifica el objeto instanciado
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado

logger.log('This is a natural funtionality')
logger.customMessage()
