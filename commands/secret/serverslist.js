module.exports =  async function(message,client)
{
    //Укажите ваш айди здесь снизу
    if(message.author.id != "219483494588350465") return message.reply('Вам не доступна данная команда.');
    client.guilds.cache.forEach(guild =>
    {
        message.channel.send(`${guild.name} | ${guild.id}`);
    })
}
