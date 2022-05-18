const Discord = require("discord.js");
module.exports =  async function(message,client)
{
   if(message.author.id != "219483494588350465")
       return message.reply('Вам не доступна данная команда.');

    let embed = new Discord.MessageEmbed();
    embed.setTimestamp();
    embed.setColor(0xf1c40f);
    embed.setAuthor(`Статистика ${client.user.username}`, client.user.displayAvatarURL());
    embed.setDescription("```" + `yaml\nЗадержка: ${Math.round(client.ws.ping)} ms\nСерверов: ${client.guilds.cache.size}\nКаналов: ${client.channels.cache.size}\nУчастников: ${client.users.cache.size}` + "```", true);
    message.channel.send({embed});
}
