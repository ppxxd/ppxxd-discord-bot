const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');


if (!args[0] && !ment) return message.reply("Укажите ID пользователя.")

let user = args[0];
    message.guild.members.unban(user);
    message.delete()
      let sicon = message.guild.iconURL();
      let gname = message.guild.name;
    let embed = new Discord.MessageEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.addField(`${message.author.username} разбанил пользователя`, `<@!${user}> был разбанен <a:fingergun:569894630485786674>`)
    embed.setTimestamp()
    message.channel.send({embed})}