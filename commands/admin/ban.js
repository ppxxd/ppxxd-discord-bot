const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');

let ment = message.mentions.members.first()
if (!args[0] && !ment) return message.reply("Упомянуйте юзера или введите его никнейм для дальнейших действий. Ник должен быть **полным** и **c учетом регистра**.")
if (args[0] && !ment){ try 
  {
let id = client.users.cache.find(user1 => user1.username == args[0]).id
let member1 = message.member.guild.members.cache.get(id);
    if (!member1)
      return message.reply("Слапни пользователя для начала.");
    if (!member1.bannable)
      return message.reply("Невозможно забанить участника с вышестоящей ролью!");
      let reasonban = args[1]
    if (!reasonban) reasonban = "Не указана";
message.guild.members.ban(member1, { reason: reasonban})
    message.delete()
    let embed = new Discord.MessageEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${message.guild.name}`, `${message.guild.iconURL()}`)
    embed.setAuthor(`${message.author.username} забанил ${member1.user.username}`)
    embed.setTimestamp()
    embed.addField("Пользователь", member1, true)
    embed.addField("Администратор", message.member, true)
    embed.addField("Причина", reasonban)
    message.channel.send({ embed })}
    catch (err) {message.reply('Ник должен быть **полным** и **c учетом регистра**.')}
  }


   if (ment ){
    let member = message.mentions.members.first()
          if (!member)
            return message.reply("Слапни пользователя для начала.");
          if (!member.bannable)
            return message.reply("Невозможно забанить участника с вышестоящей ролью!");
            let reasonban = args[1]
            if (!reasonban) reasonban = "Не указана";  
            message.guild.members.ban(member, { reason: reasonban})
          message.delete()
          let embed = new Discord.MessageEmbed()
          embed.setColor('#0e0d0d')
          embed.setFooter(`${message.guild.name}`, `${message.guild.iconURL()}`)
          embed.setAuthor(`${message.author.username} забанил ${member.user.username}`)
          embed.setTimestamp()
          embed.addField("Пользователь", member, true)
          embed.addField("Администратор", message.member, true)
          embed.addField("Причина", reason)
          message.channel.send({ embed })
         }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }