import { Context, NextFunction } from 'grammy';

async function writerIsAdmin(ctx: Context, next: NextFunction) {
  let writer: number | undefined = 0;
  if (ctx.message) writer = ctx.message!.from!.id;
  if (ctx.editedMessage) writer = ctx.editedMessage!.from!.id;
  await ctx.getChatMember(writer)
    .then(d => {
      if (d.status === 'creator' || d.status === 'administrator') return;
      next();
    })
    .catch(d => console.log(d))
}

export default writerIsAdmin;