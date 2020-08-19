const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
let ment = message.mentions.members.first()

if (args[0] && !ment){
  let id = client.users.find('username', args[0]).id
  let rmember = message.member.guild.members.get(id);
let reason = args.slice(1).join(' ');
if (!reason) reason = "Не указана";
const role = message.guild.roles.find('name', "Visitor");
rmember.removeRoles(rmember.roles)
 setTimeout(() => {
  rmember.addRoles(role.id)
  }, 1000)
  let sicon = message.guild.iconURL;
  let gname = message.guild.name;
  let admin = message.author
  let embed = new Discord.RichEmbed()
  embed.setColor('#0e0d0d')
  embed.setFooter(`${gname}`, `${sicon}`)
  embed.addField(`${message.author.username} размутил ${rmember.user.username}`, `${rmember} был размучен <a:fingergun:569894630485786674>`)
  embed.setTimestamp()
  message.channel.send({embed})
  rmember.send(`<a:shruggif:580719362290221064> | Вы были размучены на сервере **${gname}**. Размутил: ${admin}`)}




  if (ment){
    let rmember = message.mentions.members.first()
let reason = args.slice(1).join(' ');
if (!reason) reason = "Не указана";
const role = message.guild.roles.find('name', "Visitor");
rmember.removeRoles(rmember.roles)
   setTimeout(() => {
    rmember.addRoles(role.id)
    }, 1000)
    let sicon = message.guild.iconURL;
    let gname = message.guild.name;
    let admin = message.author
    let embed = new Discord.RichEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.addField(`${message.author.username} размутил ${rmember.user.username}`, `${rmember} был размучен <a:fingergun:569894630485786674>`)
    embed.setTimestamp()
    message.channel.send({embed})
    rmember.send(`<a:shruggif:580719362290221064> | Вы были размучены на сервере **${gname}**. Размутил: ${admin}`)}
  }