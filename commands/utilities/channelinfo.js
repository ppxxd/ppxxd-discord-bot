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
if (message.mentions.channels.first()) {
  guildChannel = message.mentions.channels.first();
} else {
  guildChannel = message.channel;
}
moment.locale('ru')
    let embed = new Discord.MessageEmbed() 
    embed.setColor(message.member.displayHexColor) 
    embed.setAuthor(`Информация о канале ` + "#" + guildChannel.name)
    embed.setTimestamp()
    // Вставить туда через новый скаченный модуль момент жс которйы скорее всего есть в закладках в браузере
   //  embed.setFooter(`Создан 3 года назад....`, `${message.guild.iconURL()}`)
    embed.addField("ID", guildChannel.id, true)
    embed.addField("Название", "#" + guildChannel.name, true)
    embed.addField('Категория', `${guildChannel.parent ? guildChannel.parent : '󠇰'}`, true)
    embed.addField("Cоздан", `${moment.utc(guildChannel.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`)
    message.channel.send({embed})}