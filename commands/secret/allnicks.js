const Discord = require("discord.js");
module.exports =  async function(message,args){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
const nick = args.join(" ");
message.guild.members.filter(m => !m.user.bot).forEach(member => member.setNickname(nick))
message.channel.send(`Ники были установлены`)}