const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
let ment = message.mentions.members.first()
let sicon = message.guild.iconURL();
let gname = message.guild.name;
let reason = args.slice(1).join(' ');
if (!reason) reason = "Не указана";

if (args[0] && !ment){
  let id = client.users.cache.find(user1 => user1.username == args).id
  let rmember = message.member.guild.members.cache.get(id);
  rmember.roles.remove(rmember.roles.cache)
  let embed = new Discord.MessageEmbed()
  embed.setColor('#0e0d0d')
  embed.setFooter(`${gname}`, `${sicon}`)
  embed.addField(`${message.author.username} размутил ${rmember.user.username}`, `${rmember} был размучен <a:fingergun:569894630485786674>`)
  embed.setTimestamp()
  message.channel.send({embed})}




if (ment){
    ment.roles.remove(ment.roles.cache)
    let embed = new Discord.MessageEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.addField(`${message.author.username} размутил ${ment.user.username}`, `${ment} был размучен <a:fingergun:569894630485786674>`)
    embed.setTimestamp()
    message.channel.send({embed})}




  }