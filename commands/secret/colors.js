module.exports =  async function(message,config)
{
  if(message.author.id != config.owner)
    return message.reply('Вам недоступна данная команда.');

 //Какие-то цвета не работают, да и копировать с текста можно, а с фото нет.
 //message.channel.send({files:["./files/coloredcodeblock.png"]});
  message.channel.send('```diff\n-diff``````scss\n[scss]``````dts\n#dts``````fix\nfix``````yaml\nyaml``````ini\n[ini]``````md\n#md``````bf\nbf``````abc\nabc```');
}
