const Discord = require("discord.js");
const talkedRecently = new Set();
const Menu = require('../files/Menu')

module.exports = async function (message) {
  if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
  if (talkedRecently.has(message.author.id))
    return message.reply('Подождите 2 секунды пожалуйста.')
      .then(message => {
        message.delete(2500)
      });;
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id)
  }, 2500);
let emojis = message.guild.emojis.cache.array();
var fields = [];
var temparr = []
//console.log(emojis.length)

for (i = 0; i < emojis.length; i++) {
    if (emojis[i].animated) {temparr.push(
        {
          "name": `${emojis[i].name} <a:${emojis[i].name}:${emojis[i].id}>`,
          "value": `*${emojis[i].id}*`,
          "inline": true
        }
      )} else {
    temparr.push(
    {
      "name": `${emojis[i].name} <:${emojis[i].name}:${emojis[i].id}>`,
      "value": `*${emojis[i].id}*`,
      "inline": true
    }
  )}
  if (i % 15 == 0 && i != 0) {
    fields.push(temparr)
    temparr = []
  }
}
if (temparr.length != 0) fields.push(temparr)
let sicon = message.guild.iconURL;
let gname = message.guild.name;
let color = message.member.displayColor
new Menu.ArrowMenuWithFields(message, fields, {
  "timestamp": new Date(),
  "color": color,
  "footer": {
    "icon_url": ``,
    "text": message.author.username
  },
  "author": {
    "name": `Список эмодзи на сервере ${gname}`,
    "icon_url": sicon
  },
}) 


 
}
