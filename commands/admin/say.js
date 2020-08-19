const Discord = require("discord.js");
module.exports =  async function(message,args){ if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('вы не администратор.');
const sayMessage = args.join(" ");
message.delete().catch(O_o => { });
message.channel.send(sayMessage);}