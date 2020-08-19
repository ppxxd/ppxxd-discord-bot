const Discord = require("discord.js");
const moment = require('moment');
const talkedRecently = new Set();
module.exports =  async function(message,args){ if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
if (talkedRecently.has(message.author.id))
  return message.reply('Подождите 2 секунды пожалуйста.')
  .then(message => {
    message.delete(2500)
  });;
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id)
}, 2500);
let sicon = message.guild.iconURL;
let gname = message.guild.name;
let nud = args.slice(0).join(' ');
let role = message.mentions.roles.first() || message.guild.roles.get(nud) || message.guild.roles.find(role => role.name ===nud);
if (!role) return message.reply('Укажите роль.')
moment.locale('ru')
if (role.mentionable = `false`) stats = `Нет`;
if (role.mentionable = `true`) stats = `Да`;
let embed = new Discord.RichEmbed()
    embed.setColor(role.hexColor)
    embed.setTimestamp()
    embed.setFooter(`${gname}`, sicon)
    embed.setAuthor(`Информация о ${role.name}`)
    embed.addField('ID', role.id, true)
    embed.addField('Участники', role.members.size, true)
    embed.addField('Позиция', role.position, true)
    embed.addField('Цвет', role.hexColor, true)
    embed.addField("Упоминаемая", `${stats}`, true)
    embed.addField('Создана', `${moment.utc(role.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`, true)
    message.channel.send('Узнать список участников - ' + "`" +`~rolemembers @${role.name}` + "`", {embed})
  }