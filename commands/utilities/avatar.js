const Discord = require("discord.js");
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


    let embed = new Discord.MessageEmbed();
    embed.setTitle(`Глобальный аватар ${user.tag}`);
    embed.setColor(member.displayColor);
    embed.setDescription(`[Сcылка](${user.displayAvatarURL()})`);
    embed.setImage(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }));
    message.channel.send({embed});
}