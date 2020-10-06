module.exports =  async function(message)
{
  if(message.author.id != "219483494588350465") return message.reply('Вам недоступна данная команда.');

  message.channel.send('```diff\n-diff``````scss\n[scss]``````dts\n#dts``````fix\nfix``````css\ncss``````yaml\nyaml``````ini\n[ini]``````md\n#md``````bf\nbf``````tex\n$tex``````abc\nabc```');  
}

//message.channel.send({files:["./files/coloredcodeblock.png"]})