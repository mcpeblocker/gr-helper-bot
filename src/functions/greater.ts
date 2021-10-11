import { Context, NextFunction } from 'grammy';
import bot from '../core/bot';

bot.on(':new_chat_members', async (ctx: Context, next: NextFunction) => {
  const grMemCount = await ctx.getChatMemberCount()
    .then(c => c)
    .catch(e => 'Can\'t know')
  ctx.update.message?.new_chat_members!.forEach(newMem => {
    ctx.reply(`Welcome <a href="tg://user?id=${newMem.id}">${newMem.first_name}</a>!\nGroup Members Count: ${grMemCount}`, { parse_mode: 'HTML' });
  });
  next();
});