import { Bot } from 'grammy';
import config from '../config/config';

const bot = new Bot(config.BOT_TOKEN);

bot.init()
  .then(d => console.log(`Bot @${bot.botInfo.username} was started`))
  .catch(e => console.log('Cant\'n run'))

bot.start();

export default bot;