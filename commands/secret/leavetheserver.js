module.exports =  async function(message,client,args,config)
{
    if(message.author.id != config.owner)
        return message.reply('Вам не доступна данная команда.');
    let guildID = client.guilds.cache.get(args[0]);
    guildID.leave();
}