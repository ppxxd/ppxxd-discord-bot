module.exports =  async function(message,args)
{
     if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('Вы не администратор.');
     
     let nick = args.join(" ");
     let guildownerid = message.guild.owner.id;
     let members = message.guild.members.cache.filter(m => m.user.bot !== true && m.user.id !== guildownerid);

     members.forEach(member => member.setNickname(nick));
     message.channel.send(`Никнеймы пользователей были установлены <a:slimebrurplegif:581440269598064650>`);
}