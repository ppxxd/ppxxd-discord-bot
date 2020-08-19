const Discord = require("discord.js");
module.exports =  async function(message){
    let invite = await message.channel.createInvite({
}, `I love you 3000`).catch(console.log);

 console.log(invite ? `Вот ссылка на инвайт: ${invite}` : "Недостаточно прав.");
}