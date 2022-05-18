const Discord = require("discord.js");
module.exports =  async function(message,args)
{
    if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false))
        return message.reply('Вы не администратор.');

    if (!args[0])
        return message.reply("Укажите ID пользователя.");

    message.guild.members.unban(args[0]);
    message.delete();

    let embed = new Discord.MessageEmbed();
        embed.setColor('#0e0d0d');
        embed.setFooter(`${message.guild.name}`, `${message.guild.iconURL()}`);
        embed.setAuthor(`${message.author.username} разбанил пользователя!`, message.author.avatarURL());
        embed.setThumbnail(message.guild.iconURL());
        embed.setDescription(`<@!${args[0]}> был разбанен!`);
        embed.setTimestamp();
    message.channel.send({embed});
}