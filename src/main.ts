import { Context } from "grammy";
import bot from "./core/bot";

bot
    .filter(ctx => ctx.chat?.type === "private")
    .command('start', (ctx: Context) => {
        ctx.reply(`Salom, <b>${ctx.from?.first_name}</b>`, { parse_mode: 'HTML' });
    });

bot.on(':new_chat_members', async (ctx: Context) => {
    ctx.deleteMessage();
    const grMemCount = await ctx.getChatMemberCount()
        .then(c => c)
        .catch(e => 'Can\'t know')
    ctx.update.message?.new_chat_members!.forEach(newMem => {
        ctx.reply(`Welcome <a href="tg://user?id=${newMem.id}">${newMem.first_name}</a>!\nGroup Members Count: ${grMemCount}`, { parse_mode: 'HTML' });
    });
});

bot
    .filter(ctx => ctx.message!.from!.id === 777000)
    .filter(ctx => ctx.message!.from!.username === 'GroupAnonymousBot')
    .on('::url', async (ctx: Context) => {
        await ctx.getChatMember(ctx.message!.from!.id)
            .then(d => {
                if (d.status === 'creator' || d.status === 'administrator') return;
                ctx.deleteMessage();
                const first_name = ctx.message?.from?.first_name;
                const last_name = ctx.message?.from?.last_name || '';
                const id = ctx.message?.from?.id;
                const msg = `Iltimos guruhda reklama tarqatmang <a href="tg://user?id=${id}">${first_name + ' ' + last_name}</a> !`;
                ctx.reply(msg, { parse_mode: 'HTML' });
            })
    })

bot
    .filter(ctx => ctx.message!.from!.id === 777000)
    .filter(ctx => ctx.message!.from!.username === 'GroupAnonymousBot')
    .on('edited_message::url', async (ctx: Context) => {
        await ctx.getChatMember(ctx.editedMessage!.from!.id)
            .then(d => {
                if (d.status === 'creator' || d.status === 'administrator') return true;
                ctx.deleteMessage();
                const first_name = ctx.editedMessage?.from?.first_name;
                const last_name = ctx.editedMessage?.from?.last_name || '';
                const id = ctx.editedMessage?.from?.id;
                const msg = `Iltimos guruhda reklama tarqatmang <a href="tg://user?id=${id}">${first_name + ' ' + last_name}</a> !`;
                ctx.reply(msg, { parse_mode: 'HTML' });
            })
    })

bot
    .init()
    .then(() => {
        console.log(`Bot @${bot.botInfo.username} was started`);
    })
    .catch(reason => {
        console.log("Bot can't be started");
    })

bot.start();