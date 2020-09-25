const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '794524932:AAGEs0sG8m5htNK10_nCb78Tr5JN_kzwLck';

const bot = new TelegramBot(TOKEN, {polling: true});
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from Heroku, bot says: "Hi, ${msg.from.first_name}"` );
})