const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports =  async function(message){ if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд.')
if (talkedRecently.has(message.author.id))
return message.reply('Подождите 2 секунды пожалуйста.') .then(message => {
  message.delete(2500)
});;
talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id);
}, 2500);
message.channel.send("во 1) хули ты мне сделаешь вовторых пошел нахуй втетьих 3)что ты мне сделаешь, я в другом городе за мат извени");
}