const Discord = require("discord.js");
const talkedRecently = new Set();
const Menu = require('../../files/Menu')
module.exports = async function (message)
{
  if (talkedRecently.has(message.author.id))
    return message.reply('Подождите 2 секунды пожалуйста.')
        .then(message => {message.delete(2500)});
  talkedRecently.add(message.author.id);
  setTimeout(() => {talkedRecently.delete(message.author.id)}, 2500);


let roles = message.guild.roles.cache.array();
//console.log(roles)
var fields = [];
var temparr = []

for (i = 0; i < roles.length; i++) {
  temparr.push(
    {
      "name": `**${roles[i].name}**`,
      "value": `Участников: ${roles[i].members.size}`,
      "inline": true
    }
  )
  if (i % 15 == 0 && i != 0) {
    fields.push(temparr)
    temparr = []
  }
}
if (temparr.length != 0) fields.push(temparr)
let sicon = message.guild.iconURL();
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
    "name": `Список ролей на сервере ${gname}`,
    "icon_url": sicon
  },
}) 


 
}

