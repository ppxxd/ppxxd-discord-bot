module.exports =  async function(message)
{
  //Укажите свой айди здесь
  if(message.author.id != "219483494588350465")
    return message.reply('Вам недоступна данная команда.');

 //Какие-то цвета не работают, да и копировать с текста можно, а с фото нет.
 //message.channel.send({files:["./files/coloredcodeblock.png"]});
  message.channel.send('```diff\n-diff``````scss\n[scss]``````dts\n#dts``````fix\nfix``````yaml\nyaml``````ini\n[ini]``````md\n#md``````bf\nbf``````abc\nabc```');
}
