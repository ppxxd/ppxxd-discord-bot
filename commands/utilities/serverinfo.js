const Discord = require("discord.js");
const moment = require('moment');
const talkedRecently = new Set();
moment.locale('ru');
module.exports =  async function(message)
{
    if (talkedRecently.has(message.author.id))
        return message.reply('Подождите 2 секунды пожалуйста.')
            .then(message => {message.delete(2500)});
    talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id)}, 2500);

    let online = message.guild.members.cache.filter(m => m.user.presence.status == 'offline');

    let embed = new Discord.MessageEmbed();
        embed.setColor(message.member.displayHexColor);
        embed.setThumbnail(message.guild.iconURL());
        embed.setAuthor(`Информация о сервере ` + message.guild.name, message.guild.iconURL());
        embed.setTimestamp();
        embed.setFooter(`${message.guild.name}`, `${message.guild.iconURL()}`);
        embed.addField("ID", message.guild.id, true);
        embed.addField("Название", message.guild.name, true);
        embed.addField("Владелец","<" + "@" + message.guild.owner.user.id + ">", true);
        embed.addField('Кол-во каналов', message.guild.channels.cache.size, true);
        embed.addField('Кол-во ролей', message.guild.roles.cache.size, true);
        embed.addField("Кол-во участников", message.guild.memberCount, true);
        embed.addField("Кол-во ботов", message.guild.members.cache.filter(m => m.user.bot == false).size + 1, true);
        embed.addField("Участников онлайн", online.size, true);
        embed.addField("Кол-во эмодзи", message.guild.emojis.cache.size, true);
        embed.addField("Cоздан", `${moment.utc(message.guild.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`, true);
    message.channel.send({embed})}