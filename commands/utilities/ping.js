const Discord = require("discord.js");
const moment = require("moment");
module.exports =  async function(message,client)
{
    let embed = new Discord.MessageEmbed();
    embed.setColor(0xf1c40f);
    embed.setAuthor(`Задержка ${client.user.username}`, client.user.displayAvatarURL());
    embed.setTimestamp();
    embed.setDescription("```" + `yaml\n${Math.round(client.ws.ping)} ms` + "```");
    message.channel.send({embed});
}
