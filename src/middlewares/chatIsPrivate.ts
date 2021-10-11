import { Context, NextFunction } from 'grammy';

function chatIsPrivate(ctx: Context, next: NextFunction) {
  if (ctx.chat?.type === 'private') return;
  next();
}

export default chatIsPrivate;