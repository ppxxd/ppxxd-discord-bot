const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports =  async function(message,args,client){  if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
if (talkedRecently.has(message.author.id))
  return message.reply('Подождите 2 секунды пожалуйста.')
  .then(message => {
    message.delete(2500)
  });;
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id)
}, 2500);
let ment = message.mentions.members.first()

//если нет ничего
if (!args[0] && !ment) {
  let member = message.member;
   const user = member.user;
 
     let embed = new Discord.MessageEmbed() 
   embed.setTitle(`${user.tag}`)
   embed.setColor(member.displayColor)
   embed.setDescription(`[Сcылка](${user.displayAvatarURL()})`)
     embed.setImage(user.avatarURL());
     message.channel.send({embed})}

//Если есть аргументы без слапа
if (args[0] && !ment) {
     let id = client.users.cache.find(user => user.username === args[0]).id
let member = message.member.guild.members.cache.get(id)
  const user = member.user;
    let embed = new Discord.MessageEmbed()  
  embed.setTitle(`${user.username}#${user.discriminator}`)
  embed.setColor(member.displayColor)
  embed.setDescription(`[Сcылка](${user.displayAvatarURL()})`)
    embed.setImage(user.avatarURL());
    message.channel.send({embed})}

//Если есть слап без аргументов
if (ment) {
  let member = message.mentions.members.first()
   const user = member.user;
     let embed = new Discord.MessageEmbed() 
     embed.setTitle(`${user.username}#${user.discriminator}`)
   embed.setColor(member.displayColor)
   embed.setDescription(`[Сcылка](${user.displayAvatarURL()})`)
     embed.setImage(user.avatarURL());
     message.channel.send({embed})}    
}