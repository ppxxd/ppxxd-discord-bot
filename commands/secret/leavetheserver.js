module.exports =  async function(message,client,args)
{
    //Укажите ваш айди здесь снизу
    if(message.author.id != "219483494588350465")
        return message.reply('Вам не доступна данная команда.');
    let guildID = client.guilds.cache.get(args[0]);
    guildID.leave();
}