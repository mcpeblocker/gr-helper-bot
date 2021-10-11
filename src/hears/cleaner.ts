import { Context } from 'grammy';
import bot from '../core/bot';
import writerIsAnonym from '../middlewares/writerIsAnonym';
import writerIsAdmin from '../middlewares/writerIsAdmin';

// Join Group Member
bot.on(':new_chat_members', async (ctx: Context) => {
  await ctx.deleteMessage();
});

// Leave Group Member
bot.on(':left_chat_member', async (ctx: Context) => {
  await ctx.deleteMessage();
})

// Link
bot.on('::url', writerIsAdmin, writerIsAnonym, async (ctx: Context) => {
  ctx.deleteMessage();
  const first_name: string | undefined = ctx.message?.from?.first_name;
  const last_name: string | undefined = ctx.message?.from?.last_name || '';
  const id: number | undefined = ctx.message?.from?.id;
  const msg: string = `Iltimos guruhda reklama tarqatmang <a href="tg://user?id=${id}">${first_name + ' ' + last_name}</a> !`;
  ctx.reply(msg, { parse_mode: 'HTML' });
})

bot.on('edited_message::url', writerIsAdmin, writerIsAnonym, async (ctx: Context) => {
  ctx.deleteMessage();
  const first_name = ctx.editedMessage?.from?.first_name;
  const last_name = ctx.editedMessage?.from?.last_name || '';
  const id = ctx.editedMessage?.from?.id;
  const msg = `Iltimos guruhda reklama tarqatmang <a href="tg://user?id=${id}">${first_name + ' ' + last_name}</a> !`;
  ctx.reply(msg, { parse_mode: 'HTML' });
})