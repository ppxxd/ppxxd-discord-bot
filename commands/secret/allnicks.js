module.exports =  async function(message,args, client)
{
     if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false))
          return message.reply('Вы не администратор.');
     
     let futureNickname = args.join(" ");
     let members = message.guild.members.cache.filter(m => m.user.bot !== true && m.user.id !== message.guild.owner.id &&
         message.guild.members.cache.get(m.user.id).hasPermission("ADMINISTRATOR") == false);
     
     if (members.size != 0) {
          members.forEach(member => member.setNickname(futureNickname));
          message.channel.send(`Никнеймы пользователей были установлены`);
     }
     else {
          message.channel.send(`Нет юзеров, кому можно было бы сменить ник!`);
     }
}