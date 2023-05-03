const Discord = require("discord.js");
const moment = require('moment');
const momentDurationFormatSetup = require("moment-duration-format");
const talkedRecently = new Set();
module.exports =  async function(message,args,client){ 
  momentDurationFormatSetup(moment);
  typeof moment.duration.fn.format === "function";
  // true
  typeof moment.duration.format === "function";
  // true
moment.locale('ru')
let ment = message.mentions.members.first()

if (!args[0] & !ment) {
  var user = message.author;
  var member = message.guild.member(user); 

 var createdAt = moment(user.createdAt)
 var rightnow = moment()

 var years = rightnow.diff(createdAt, 'year');
createdAt.add(years, 'years');

var months = rightnow.diff(createdAt, 'months');
createdAt.add(months, 'months');

var days = rightnow.diff(createdAt, 'days');
var createdFinal = diffDuration.Years() + "y " + diffDuration.asMonths() + "m " + diffDuration.asDays() + "d "

  var embed = new Discord.RichEmbed()
      embed.setFooter(`Создан ${createdFinal}`, `${message.author.avatarURL}`)
      embed.setAuthor(`Информация о ${user.username}:`)

      embed.addField("Аккаунт создан", `${moment.utc(user.createdAt).format('DD MMMM Y в HH:mm:ss')}`,true)

      embed.addField("Вошел на сервер", `${moment.utc(member.joinedAt).format('DD MMMM Y в HH:mm:ss')}`,true)
     
     
     
  
     
      message.channel.send({embed})

  
      
  }


}