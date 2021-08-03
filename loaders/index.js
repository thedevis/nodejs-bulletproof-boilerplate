const expressLoader =  require('./express');
const { mongoInit } = require('./mongoose');
const Logger = require('./logger');
const events = require('./events');
async function init({expressApp:app}){
    const mongoConnection = await mongoInit();
    Logger.info('✌️ DB loaded and connected!');

    await expressLoader({ expressApp: app });
    Logger.info('✌️ Express loaded');
}
module.exports = init




