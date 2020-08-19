const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports =  async function(message){if(message.author.id != "219483494588350465") return message.reply('мейби ты крутая.');
if (talkedRecently.has(message.author.id))
  return message.reply('Подождите 1 минуту пожалуйста.')
  .then(message => {
    message.delete(60000)
  });;
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id)
}, 60000)


message.channel.send("МЕЙБИ БЕЙБИ ЛУЧШЕ ТВОЕЙ ДЕТКИ ЛУЧШЕ ВСЕХ НА СВЕТЕ")
message.channel.send("ГУБЫ ПАХНУТ МАЛИНОЙ ДЕВОЧКА АСКОРБИНКА") 
message.channel.send("МАЛЬЧИКИ ЭТО ТАК НЕ КРАСИВО")
message.channel.send("ФРЕНДЗОНА")
message.channel.send("ФРЕНДЗОНА") 
message.channel.send("ГОЛУБЫЕ ВОЛОСЫ РАЗВИВАЕТ ВЕТЕР")
message.channel.send("Я КАЧУ НА ТАКОЙ СКОРОСТИ ОНИ И НЕ ЗАМЕТЯТ")
}
