const Discord = require("discord.js");
module.exports =  async function(message,args){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
let nick = args.join(" ")
var guildownerid = message.guild.owner.id
var members = message.guild.members.cache.filter(m => m.user.bot !== true && m.user.id !== guildownerid)
members.forEach(member => member.setNickname(nick))
message.channel.send(`Никнеймы пользователей были установлены <a:slimebrurplegif:581440269598064650>`)}