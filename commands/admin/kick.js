const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
let ment = message.mentions.members.first()



if (args[0] && !ment){
let id = client.users.find('username', args[0]).id
let member1 = message.member.guild.members.get(id);
    if (!member1)
      return message.reply("Слапни пользователя для начала.");
    if (!member1.kickable)
      return message.reply("Невозможно кикнуть участника с вышестоящей ролью!");
      let reason = args.slice(1).join(' ');
if (!reason) reason = "Не указана";  
      member1.kick(reason)
      let sicon = message.guild.iconURL;
      let gname = message.guild.name;
      let admin = message.author
        let embed = new Discord.RichEmbed()
        embed.setColor('#0e0d0d')
        embed.setFooter(`${gname}`, `${sicon}`)
        embed.setAuthor(`${message.author.username} кикнул ${member1.user.username}`)
        embed.setTimestamp()
        embed.addField("Пользователь", member1, true)
        embed.addField("Администратор", message.member, true)
        embed.addField("Причина", reason)
        message.channel.send({ embed })
        member1.send(`<a:finger_wave:576175222957539328> | Вы были кикнуты с сервера **${gname}** по причине: **${reason}**. Кикнул: ${admin}`)}
      
        if (ment ){
          let member = message.mentions.members.first()
                if (!member)
                  return message.reply("Слапни пользователя для начала.");
                if (!member.kickable)
                  return message.reply("Невозможно кикнуть участника с вышестоящей ролью!");
                  let reason = args.slice(1).join(' ');
      if (!reason) reason = "Не указана";   
              member.kick(reason)
              let sicon = message.guild.iconURL;
              let gname = message.guild.name;
              let admin = message.author
                let embed = new Discord.RichEmbed()
                embed.setColor('#0e0d0d')
                embed.setFooter(`${gname}`, `${sicon}`)
                embed.setAuthor(`${message.author.username} кикнул ${member.user.username}`)
                embed.setTimestamp()
                embed.addField("Пользователь", member, true)
                embed.addField("Администратор", message.member, true)
                embed.addField("Причина", reason)
                message.channel.send({ embed })
                member.send(`<a:finger_wave:576175222957539328> | Вы были кикнуты с сервера **${gname}** по причине: **${reason}**. Кикнул: ${admin}`)}    
      
      
      
      
      
      
      
      
      
      
      
      }