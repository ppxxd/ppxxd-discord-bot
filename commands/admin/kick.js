const Discord = require("discord.js");
module.exports =  async function(message,args,client){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
let ment = message.mentions.members.first()

if (!args[0] && !ment) return message.reply("Упомянуйте юзера или введите его никнейм для дальнейших действий. Ник должен быть **полным** и **c учетом регистра**.")

if (args[0] && !ment){try{
  let id = client.users.cache.find(user1 => user1.username == args[0]).id
let member1 = message.member.guild.members.cache.get(id);
    if (!member1)
      return message.reply("Слапни пользователя для начала.");
    if (!member1.kickable)
      return message.reply("Невозможно кикнуть участника с вышестоящей ролью!");
      let reasonkick = args[1]
    if (!reasonkick) reasonkick = "Не указана"; 
    member1.kick(reasonkick)
      let sicon = message.guild.iconURL();
      let gname = message.guild.name;
        let embed = new Discord.MessageEmbed()
        embed.setColor('#0e0d0d')
        embed.setFooter(`${gname}`, `${sicon}`)
        embed.setAuthor(`${message.author.username} кикнул ${member1.user.username}`)
        embed.setTimestamp()
        embed.addField("Пользователь", member1, true)
        embed.addField("Администратор", message.member, true)
        embed.addField("Причина", reasonkick)
        message.channel.send({ embed })}
        catch (err) {message.reply('Ник должен быть **полным** и **c учетом регистра**.')}}
      
        if (ment){
          let member = message.mentions.members.first()
                if (!member)
                  return message.reply("Слапни пользователя для начала.");
                if (!member.kickable)
                  return message.reply("Невозможно кикнуть участника с вышестоящей ролью!");
                  let reasonkick = args[1]
    if (!reasonkick) reasonkick = "Не указана"; 
    member.kick(reasonkick)
              let sicon = message.guild.iconURL();
              let gname = message.guild.name;
              
                let embed = new Discord.MessageEmbed()
                embed.setColor('#0e0d0d')
                embed.setFooter(`${gname}`, `${sicon}`)
                embed.setAuthor(`${message.author.username} кикнул ${member.user.username}`)
                embed.setTimestamp()
                embed.addField("Пользователь", member, true)
                embed.addField("Администратор", message.member, true)
                embed.addField("Причина", reasonkick)
                message.channel.send({ embed })
                }    
      
      
      
      
      
      
      
      
      
      
      
      }