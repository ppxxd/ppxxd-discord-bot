const Discord = require("discord.js");
module.exports =  async function(message){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('Вы не администратор.');
var guildownerid = message.guild.owner.id
var members = message.guild.members.cache.filter(m => m.user.bot !== true && m.user.id !== guildownerid)
members.forEach(member => member.setNickname(''))
message.channel.send(`Никнеймы пользователей сброшены <a:shruggif:580719362290221064>`)}