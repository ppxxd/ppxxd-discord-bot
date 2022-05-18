module.exports =  async function(message)
{ 
     if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR"))
          return message.reply('Вы не администратор.');

     let members = message.guild.members.cache.filter(m => m.user.bot !== true && m.user.id !== message.guild.owner.id);
     
     members.forEach(member => member.setNickname(''));
     message.channel.send(`Никнеймы пользователей сброшены <a:shruggif:580719362290221064>`);
}