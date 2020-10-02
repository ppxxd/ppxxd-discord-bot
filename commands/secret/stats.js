const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports =  async function(message,client){if(message.author.id != "219483494588350465") return message.reply('мейби ты крутая.');
const user = client.user.avatarURL
message.channel.send({embed: {
    color: 0xf1c40f,
    author: {
      name: 'Статистика ppxxd',
      icon_url: user
    },
  description: "```" + `yaml\nЗадержка: ${Math.round(client.ws.ping)} ms\nСерверов: ${client.guilds.cache.size}\nКаналов: ${client.channels.cache.size}\nУчастников: ${client.users.cache.size}` + "```",
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL(),
      text: message.guild.name
    }
  }})
}
