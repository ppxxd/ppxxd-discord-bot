const Discord = require("discord.js");
const moment = require('moment');
moment.locale('ru');
const talkedRecently = new Set();
module.exports =  async function(message,args,client)
{
    if (talkedRecently.has(message.author.id))
        return message.reply('Подождите 2 секунды пожалуйста.')
            .then(message => {message.delete(2500)});
    talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id)}, 2500);

    let guildChannel = args[0] == undefined ? message.channel : message.mentions.channels.first() || message.guild.channels.cache.find(channel1 => channel1.name === args.join(" ")) || client.channels.cache.get(args[0]);
    if (!guildChannel)
        return message.reply ('такой канал не найден.');

    if (guildChannel.type == `text`) type = `Текстовый`;
    if (guildChannel.type == `voice`) type = `Голосовой`;
    if (guildChannel.type == `category`) type = `Категория`;
    if (guildChannel.type == `news`) type = `Новостной`;

    let embed = new Discord.MessageEmbed();
    embed.setColor(message.member.displayHexColor) ;
    embed.setAuthor(`Информация о канале ` + "#" + guildChannel.name);
    embed.setTimestamp();
    embed.addField("ID", guildChannel.id, true);
    embed.addField("Название", "#" + guildChannel.name, true);
    embed.addField('Категория', `${guildChannel.parent ? guildChannel.parent : '󠇰'}`, true);
    embed.addField('Тип канала', `${type}`, true);
    embed.addField("Cоздан", `${moment.utc(guildChannel.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`, true);
    message.channel.send({embed});
}