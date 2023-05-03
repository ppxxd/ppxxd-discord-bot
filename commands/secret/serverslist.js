module.exports =  async function(message,client,config)
{
    if(message.author.id != config.owner)
        return message.reply('Вам не доступна данная команда.');
    client.guilds.cache.forEach(guild =>
    {
        message.channel.send(`${guild.name} | ${guild.id}`);
    })
}
