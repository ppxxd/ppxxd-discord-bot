const Discord = require("discord.js");
module.exports =  async function(message,args){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
    let member = message.mentions.members.first()
    let nuck = args.slice(1).join(' ');
    if (!member)
      return message.reply("Слапни жертву для начала.");
    message.delete()
    member.setNickname(nuck)
    let sicon = message.guild.iconURL;
    let gname = message.guild.name;
    let embed = new Discord.RichEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.setAuthor(`Изменение ника`)
    embed.setTimestamp()
    embed.setDescription(`<@!${message.author.id}> изменил ник <@!${member.id}> на **${nuck}**`)
    message.channel.send({embed})}