const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');



    let user1 = client.user.fetchProfile(args[0]);
    console.log(user1)

let user = args[0];
    let id = client.users.find('id', args[0])
    message.guild.unban(user);
    message.delete()
      .then(msg => console.log(`Удалил команду анбана от ${msg.author.username}`))
      .catch(console.error);
      let sicon = message.guild.iconURL;
      let gname = message.guild.name;
      let admin = message.author
    let embed = new Discord.RichEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.addField(`${message.author.username} разбанил пользователя`, `<@!${user}> был разбанен <a:fingergun:569894630485786674>`)
    embed.setTimestamp()
    message.channel.send({ embed })
    id.send(`<a:shruggif:580719362290221064> | Вы были разбанены на сервере **${gname}**. Разбанил: ${admin}.\n\nСсылка для повторного вступления на сервер: https://discord.gg/Uj7yBVa`)
  }