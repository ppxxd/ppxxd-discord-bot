const Discord = require("discord.js");
module.exports =  async function(message){if(message.author.id != "219483494588350465") return message.reply('мейби ты крутая.');
message.channel.send({ files: ["./files/coloredcodeblock.png"] })
}