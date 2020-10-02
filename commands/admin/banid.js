const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');

if (!args[0]) return message.reply('Укажите ID пользователя')
  
let sicon = message.guild.iconURL();
let gname = message.guild.name;
let user = args[0];


let reason = args.slice(1).join(' ');
if (!reason) reason = "Не указана";   
    message.guild.members.ban(user)
    message.delete()
    let embed = new Discord.MessageEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.setAuthor(`${message.author.username} забанил пользователя`)
    embed.setTimestamp()
    embed.addField("Пользователь", `<@!${user}>`, true)
    embed.addField("Администратор", message.member, true)
    embed.addField("Причина", reason)
    message.channel.send({embed})}
























