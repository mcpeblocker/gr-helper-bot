import { Context, NextFunction } from 'grammy';
const anonymBotUsername: string = 'GroupAnonymousBot';

function writerIsAnonym(ctx: Context, next: NextFunction) {
  let writer: string | undefined;
  if (ctx.message) writer = ctx.message!.from!.username;
  if (ctx.editedMessage) writer = ctx.editedMessage!.from!.username;
  if (writer === anonymBotUsername) return;
  next();
}

export default writerIsAnonym;