import bot from '../core/bot';
import { Context } from 'grammy';

bot.command('start', (ctx: Context) => {
  ctx.reply(`Salom, <b>${ctx.from?.first_name}</b>`, { parse_mode: 'HTML' });
});