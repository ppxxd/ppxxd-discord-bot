module.exports =  async function(message)
{
  let invite = await message.channel.createInvite({}, `There is one impostor among us.`).catch(console.log);

  console.log(invite ? `Вот ссылка на инвайт: ${invite}` : "Недостаточно прав.");
}