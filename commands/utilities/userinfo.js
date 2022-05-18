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

    //Упоминание - Автор сообщения - По нику/айди
    let member = args[0] == undefined ? message.guild.member(message.author) : message.mentions.members.first() || message.guild.members.cache.get(client.users.cache.find(user1 => user1.username == args.join(" ")) == undefined ? args[0] : client.users.cache.find(user1 => user1.username == args[0]).id);
    if (!member)
        return message.reply ('такой пользователь не найден.');
    let user = member.user;

    if (user.presence.status == `online`) status = `Онлайн` + `<:online:576165645725466674>`;
    if (user.presence.status == `offline`) status = `Оффлайн` + `<:offline:576181439641550869>`;
    if (user.presence.status == `dnd`) status = `Не беспокоить` + `<:dnd:576165645738049539>`;
    if (user.presence.status == `idle`) status = `Отошел` + `<:away:576165646103085110>`;

    let embed = new Discord.MessageEmbed();
        embed.setTimestamp();
        embed.setColor(member.displayHexColor);
        embed.setThumbnail(`${user.avatarURL()}`);
        embed.setAuthor(`Информация о ${user.username}#${user.discriminator}`, user.displayAvatarURL());
        embed.addField("Никнейм", `${user.username}`, true);
        embed.addField("ID", user.id, true);
        embed.addField("Упоминание","<" + "@" + user.id + ">", true);
        embed.addField("Статус", `${status}`, true);
        embed.addField("Играет в", `${user.presence.activities.toString() ? user.presence.activities.toString() : '-󠇰'}`, true);
        embed.addField("Аккаунт создан", `${moment.utc(user.createdAt).format('MMMM Do YYYY, HH:mm:ss')}`,true);
        embed.addField("Вошел на сервер", `${moment.utc(member.joinedAt).format('MMMM Do YYYY, HH:mm:ss')}`,true);
        embed.addField("Роли", member.roles.cache.map(r => `${r}`).join('󠇰󠇰	󠇰󠇰'),true);
    message.channel.send({embed});
  }


  