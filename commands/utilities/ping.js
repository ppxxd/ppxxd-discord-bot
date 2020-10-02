const Discord = require("discord.js");
module.exports =  async function(message,client){ if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
const user = client.user.avatarURL
message.channel.send({embed: {
    color: 0xf1c40f,
    author: {
      name: 'Задержка ppxxd',
      icon_url: user
    },
  description: "```" + `yaml\n${Math.round(client.ws.ping)} ms` + "```", 
  }})
}
