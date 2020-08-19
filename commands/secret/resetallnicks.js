const Discord = require("discord.js");
module.exports =  async function(message,args){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
let nuck = args.slice(1).join(' ');
message.guild.members.filter(m => !m.user.bot).forEach(member => member.setNickname(nuck))
message.channel.send(`Ники пользователей сброшены`)}