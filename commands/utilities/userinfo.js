const Discord = require("discord.js");
const moment = require('moment');
const talkedRecently = new Set();
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
if (talkedRecently.has(message.author.id))
  return message.reply('Подождите 2 секунды пожалуйста.')
  .then(message => {
    message.delete(2500)
  });;
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id)
}, 2500);
moment.locale('ru')
let ment = message.mentions.members.first()

if (!args[0] & !ment) {
  let user = message.author;
  let member = message.guild.member(user); 
  var time = moment.utc(user.createdAt);
  let nicc = moment(time).fromNow.format('YYYYMMDD');
  if (user.presence.status == `online`) stats = `Онлайн` + `<:online:576165645725466674>`;
  if (user.presence.status == `offline`) stats = `Оффлайн` + `<:offline:576181439641550869>`;
  if (user.presence.status == `dnd`) stats = `Не беспокоить` + `<:dnd:576165645738049539>`;
  if (user.presence.status == `idle`) stats = `Отошел` + `<:away:576165646103085110>`;
  let embed = new Discord.RichEmbed()
      embed.setTimestamp()
      embed.setFooter(`Создан примерно ${nicc}`, `${message.author.avatarURL}`)
      embed.setColor(member.displayHexColor)
      embed.setThumbnail(`${message.author.avatarURL}`)
      embed.setAuthor(`Информация о ${user.username}:`)
      embed.addField("Никнейм", `${user.username}#${user.discriminator}`, true)
      embed.addField("ID", user.id, true)
      embed.addField("Статус", `${stats}`, true)
      embed.addField("Играет в", `${user.presence.game ? user.presence.game.name : '	󠇰	󠇰'}`, true)
      embed.addField("Аккаунт создан", `${moment.utc(user.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`,true)
      embed.addField("Вошел на сервер", `${moment.utc(member.joinedAt.toString()).format('MMMM Do YYYY, HH:mm:ss')}`,true)
      embed.addField("Роли", member.roles.map(r => `${r}`).join('󠇰󠇰	󠇰󠇰'));
      message.channel.send({embed})}

  if (args[0] && !ment) {let id = client.users.find('username', args[0]).id
      let member = message.member.guild.members.get(id);
      let user = member.user    
     var time = moment.utc(user.createdAt).format('YYYYMMDD');
      let nicc = moment(time).fromNow();
      if (user.presence.status == `online`) stats = `Онлайн` + `<:online:576165645725466674>`;
      if (user.presence.status == `offline`) stats = `Оффлайн` + `<:offline:576181439641550869>`;
      if (user.presence.status == `dnd`) stats = `Не беспокоить` + `<:dnd:576165645738049539>`;
      if (user.presence.status == `idle`) stats = `Отошел` + `<:away:576165646103085110>`;
      let embed = new Discord.RichEmbed()
          embed.setTimestamp()
          embed.setFooter(`Создан примерно ${nicc}`, `${user.avatarURL}`)
          embed.setColor(member.displayHexColor)
          embed.setThumbnail(`${user.avatarURL}`)
          embed.setAuthor(`Информация о ${user.username}:`)
          embed.addField("Никнейм", `${user.username}#${user.discriminator}`, true)
          embed.addField("ID", user.id, true)
          embed.addField("Статус", `${stats}`, true)
          embed.addField("Играет в", `${user.presence.game ? user.presence.game.name : '	󠇰	󠇰'}`, true)
          embed.addField("Аккаунт создан", `${moment.utc(user.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`,true)
          embed.addField("Вошел на сервер", `${moment.utc(member.joinedAt.toString()).format('MMMM Do YYYY, HH:mm:ss')}`,true)
          embed.addField("Роли", member.roles.map(r => `${r}`).join('󠇰󠇰	󠇰󠇰'));
          message.channel.send({embed})}

if (ment) {    let member1 = message.mentions.members.first()
  let user = member1.user
  let member = message.guild.member(user)
var time = moment.utc(user.createdAt).format('YYYYMMDD');
let nicc = moment(time).fromNow();
if (user.presence.status == `online`) stats = `Онлайн` + `<:online:576165645725466674>`;
if (user.presence.status == `offline`) stats = `Оффлайн` + `<:offline:576181439641550869>`;
if (user.presence.status == `dnd`) stats = `Не беспокоить` + `<:dnd:576165645738049539>`;
if (user.presence.status == `idle`) stats = `Отошел` + `<:away:576165646103085110>`;
let embed = new Discord.RichEmbed()
    embed.setTimestamp()
    embed.setFooter(`Создан примерно ${nicc}`, `${user.avatarURL}`)
    embed.setColor(member.displayHexColor)
    embed.setThumbnail(`${user.avatarURL}`)
    embed.setAuthor(`Информация о ${user.username}:`)
    embed.addField("Никнейм", `${user.username}#${user.discriminator}`, true)
    embed.addField("ID", user.id, true)
    embed.addField("Статус", `${stats}`, true)
    embed.addField("Играет в", `${user.presence.game ? user.presence.game.name : '	󠇰	󠇰'}`, true)
    embed.addField("Аккаунт создан", `${moment.utc(user.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`,true)
    embed.addField("Вошел на сервер", `${moment.utc(member.joinedAt.toString()).format('MMMM Do YYYY, HH:mm:ss')}`,true)
    embed.addField("Роли", member.roles.map(r => `${r}`).join('󠇰󠇰	󠇰󠇰'));
    message.channel.send({embed})}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  }


  