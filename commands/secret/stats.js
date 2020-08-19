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
  description: "```" + `yaml\nЗадержка: ${Math.round(client.ping)} ms\nСерверов: ${client.guilds.size}\nКаналов: ${client.channels.size}\nУчастников: ${client.users.size}` + "```",
    timestamp: new Date(),
    footer: {
      icon_url: '',
      text: 'In' + ' ' + message.guild.name + ' ' + 'guild'
    }
  }})
}
