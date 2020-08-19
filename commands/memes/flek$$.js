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
    message.channel.send(`Подъехал флекс <a:slavyanin:538467245974749186>`, { files: ["./files/milos.gif"] });
  }