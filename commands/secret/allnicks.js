module.exports =  async function(message,args)
{
     if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false))
          return message.reply('Вы не администратор.');
     
     let futureNickname = args.join(" ");
     let members = message.guild.members.cache.filter(m => m.user.bot !== true && m.user.id !== message.guild.owner.id);

     members.forEach(member => member.setNickname(futureNickname));
     message.channel.send(`Никнеймы пользователей были установлены <a:slimebrurplegif:581440269598064650>`);
}