const Discord = require("discord.js");
const moment = require('moment');
moment.locale('ru')
const talkedRecently = new Set();
module.exports =  async function(message,args)
{
    if (talkedRecently.has(message.author.id))
        return message.reply('Подождите 2 секунды пожалуйста.')
            .then(message => {message.delete(2500)});
    talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id)}, 2500);

    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(role => role.name === args[0]);
    if (!role)
        return message.reply('Укажите роль.');

    if (role.mentionable = `false`) MentionableOrNot = `Нет`;
    if (role.mentionable = `true`) MentionableOrNot = `Да`;

    let embed = new Discord.MessageEmbed();
        embed.setColor(role.hexColor);
        embed.setTimestamp();
        embed.setFooter(message.guild.name, message.guild.iconURL());
        embed.setAuthor(`Информация о роли ${role.name}`);
        embed.addField('ID', role.id, true);
        embed.addField('Участники', role.members.size, true);
        embed.addField('Позиция', role.position, true);
        embed.addField('Цвет', role.hexColor, true);
        embed.addField("Упоминаемая", `${MentionableOrNot}`, true);
        embed.addField('Создана', `${moment.utc(role.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`, true);
    message.channel.send('Узнать список участников - ' + "`" +`~rolemembers @${role.name}` + "`", {embed});
  }