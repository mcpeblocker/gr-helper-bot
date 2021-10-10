import { Context } from "grammy";
import bot from "./core/bot";

bot
    .filter(ctx => ctx.chat?.type === "private")
    .command('start', (ctx: Context) => {
        ctx.reply(`Salom, <b>${ctx.from?.first_name}</b>`, { parse_mode: 'HTML' });
    });

bot.on(':new_chat_members', (ctx: Context) => {
    console.log(ctx);
});

bot
    .init()
    .then(() => {
        console.log(`Bot @${bot.botInfo.username} was started`);
    })
    .catch(reason => {
        console.log("Bot can't be started");
    })

bot.start();