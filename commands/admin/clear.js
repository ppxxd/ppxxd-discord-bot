const Discord = require("discord.js");
module.exports =  async function(message,args)
{   //Здесь чистка сообщений по пользователю доступна только по упоминанию,
    // чтобы избежать ошибок от админов и т.д.

    if (!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES", false))
        return message.reply('Вы не администратор.');

    let user = message.mentions.users.first();
    let amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    

    if (!amount) return message.reply('Необходимо указать кол-во сообщений для удаления!');  
    if (user && !amount) return message.reply('Необходимо указать кол-во сообщений от данного пользователя для удаления!');  

    if (!user && amount) {message.channel.bulkDelete(amount).catch(error => console.log(error.stack));
      message.channel.send(`**${amount}** сообщений(-я) было очищено!`)
      .catch(error => message.reply(`Произошла ошибка при очистке: **${error}**`))}

      if (!user && amount == '1') {message.channel.bulkDelete(2).catch(error => console.log(error.stack));  
        message.channel.send(`**${amount}** сообщение было очищено!`)
        .catch(error => message.reply(`Произошла ошибка при очистке: **${error}**`))}


    if (user && amount) {message.channel.messages.fetch({
      limit: 100,
     }).then((messages) => {
      if (user) {
      const filterBy = user ? user.id : Client.user.id;
      messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
      }
      message.delete().catch(O_o => { });
      message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
      message.channel.send(`**${user}** был очищен (${amount})!`)
      .catch(error => message.reply(`Произошла ошибка при очистке: **${error}**`))
     });} 
        
    }
  



















  
   /*message.channel.fetchMessages({
     limit: 100,
    }).then((messages) => {
     if (user) {
     const filterBy = user ? user.id : Client.user.id;
     messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
     }
     message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
     message.channel.send(`<a:trash:576175224190402560>  |  **${user}** был очищен (${amount})!`)
     .catch(error => message.reply(`Произошла ошибка при очистке: **${error}**`))
    });*/
  














  




  