const Discord = require("discord.js");
const moment = require('moment');
const talkedRecently = new Set();
module.exports =  async function(message){ if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
if (talkedRecently.has(message.author.id))
return message.reply('Подождите 2 секунды пожалуйста.')
.then(message => {
  message.delete(2500)
});;
talkedRecently.add(message.author.id);
setTimeout(() => {
talkedRecently.delete(message.author.id)
}, 2500);
let sicon = message.guild.iconURL();
  let online = message.guild.members.cache.filter(m => m.user.presence.status == 'offline');
  let memberid = message.guild.owner.user.id;
  let gname = message.guild.name;
  moment.locale('ru')
let embed = new Discord.MessageEmbed()
    embed.setColor(message.member.displayHexColor)
    embed.setThumbnail(message.guild.iconURL())
    embed.setAuthor(`Информация о сервере ` + message.guild.name, sicon)
    embed.setTimestamp()
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.addField("ID", message.guild.id, true)
    embed.addField("Название", message.guild.name, true)
    embed.addField("Владелец","<" + "@" + memberid + ">", true) 
    embed.addField("Регион", message.guild.region, true)
    embed.addField('Кол-во каналов', message.guild.channels.cache.size, true)
    embed.addField('Кол-во ролей', message.guild.roles.cache.size, true) 
    embed.addField("Кол-во участников", message.guild.memberCount, true)
    embed.addField("Кол-во ботов", message.guild.members.cache.filter(m => m.user.bot == false).size, true)
    embed.addField("Участников онлайн", online.size, true)
    embed.addField("Кол-во эмодзи", message.guild.emojis.cache.size, true)
    embed.addField("Cоздан", `${moment.utc(message.guild.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`, true)
    message.channel.send({embed})}