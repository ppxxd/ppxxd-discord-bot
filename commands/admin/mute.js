const Discord = require("discord.js");
module.exports =  async function(message,args,client){ 
  if (!message.channel.permissionsFor(message.member).has("MANAGE_ROLES", false)) return message.reply('вы не администратор.');
  let ment = message.mentions.members.first()
 
if (!args[0] && !ment) return message.reply("Упомянуйте юзера или введите его никнейм для дальнейших действий!")










  if (args[0] && !ment){
    let admin = message.author
    let id = client.users.find('username', args[0]).id
    let rmember = message.member.guild.members.get(id);
    let takenroles = rmember.roles
    let reason = args[2]
    if (!reason) reason = "Не указана";
    
const rolejail = message.guild.roles.find('name', "Замученный") || message.guild.roles.find('name', "Muted")
rmember.removeRoles(takenroles)
setTimeout(() => {
 rmember.addRoles(rolejail.id)
 }, 1000)
 let sicon = message.guild.iconURL;
 let gname = message.guild.name;

 let timer = args[1]
 if (!timer) timer  === Infinity;

 function convertMS( timer ) {
   var day, hour, minute, seconds;
   seconds = Math.floor((timer / 1000) % 60).toFixed(0),
   minute = Math.floor((timer/ (1000 * 60)) % 60).toFixed(0),
   hour = Math.floor((timer / (1000 * 60 * 60)) % 24).toFixed(0);
   day = Math.floor((timer / (1000 * 60 * 60 * 24))).toFixed(0)
   return {
       day: day,
       hour: hour,
       minute: minute,
       seconds: seconds
   };
}
var durations =  convertMS(timer)

if (durations.seconds > 1) {var timerinjail2 = durations.seconds } else {var timerinjail2 = ""} 
if (durations.seconds == 1) {var timerinjail1 = durations.seconds} else {var timerinjail1 = ""} 

if (durations.minute > 1 ) {var timerinjail3 = durations.minute}  else {var timerinjail3 = ""} 
if (durations.minute == 1 ) {var timerinjail8 = durations.minute}  else {var timerinjail8 = ""} 

if (durations.hour > 1) {var timerinjail4 = durations.hour} else {var timerinjail4 = ""} 
if (durations.hour == 1) {var timerinjail9 = durations.hour} else {var timerinjail9 = ""}

if (durations.day == 1) {var timerinjail5 = durations.day} else {var timerinjail5 = ""} 
if (durations.day < 365 + durations.day > 1) {var timerinjail4 = durations.day} else {var timerinjail4 = ""} 

if (timerinjail2+timerinjail1 == 0) {var timesec = ""} else {var timesec = timerinjail2+timerinjail1 + " сек "}
if (timerinjail3+timerinjail8 == 0) {var timemin = ""} else {var timemin = timerinjail3+timerinjail8 + " мин "}
if (timerinjail4+timerinjail9 == 0) {var timehou = ""} else {var timehou = timerinjail4+timerinjail9 + " ч "}
if (timerinjail5 == 0) {var timeday = ""} else {var timeday = timerinjail5 + " дн "}
if (timeday + timehou + timemin + timesec == "") {var timerd = "Навсегда"} else {var timerd = timeday + timehou + timemin + timesec}
    let embed = new Discord.RichEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.setAuthor(`${message.author.username} замутил ${rmember.user.username}`)
    embed.setTimestamp()
    embed.addField("Пользователь", rmember, true)
    embed.addField("Администратор", `<@!${message.author.id}>`, true)
    embed.addField("Длительность", timerd, true)
    embed.addField("Причина", reason, true)
    message.channel.send({ embed })
    rmember.send(`<a:finger_wave:576175222957539328> | Вы были замучены на сервере **${gname}** на **${timerd}** по причине: **${reason}**. Замутил: ${admin}`)
        setTimeout(() => {
          rmember.removeRole(rolejail.id)
          rmember.addRoles(takenroles)
          rmember.removeRole(rolejail.id)
        }, timer)}
 
 
















  if (ment){
    let admin = message.author
        let rmember = message.mentions.members.first()
    let takenroles = rmember.roles
    let reason = args[2]
    if (!reason) reason = "Не указана";
    const rolejail = message.guild.roles.find('name', "Замученный") || message.guild.roles.find('name', "Muted")
    rmember.removeRoles(takenroles)
       setTimeout(() => {
        rmember.addRoles(rolejail.id)
        }, 1000)
        let sicon = message.guild.iconURL;
        let gname = message.guild.name;

        let timer = args[1]
        if (!timer) timer  === Infinity;
        function convertMS( timer ) {
          var day, hour, minute, seconds;
          seconds = Math.floor((timer / 1000) % 60).toFixed(0),
          minute = Math.floor((timer/ (1000 * 60)) % 60).toFixed(0),
          hour = Math.floor((timer / (1000 * 60 * 60)) % 24).toFixed(0);
          day = Math.floor((timer / (1000 * 60 * 60 * 24))).toFixed(0)
          return {
              day: day,
              hour: hour,
              minute: minute,
              seconds: seconds
          };
      }
      var durations =  convertMS(timer)

if (durations.seconds > 1) {var timerinjail2 = durations.seconds } else {var timerinjail2 = ""} 
if (durations.seconds == 1) {var timerinjail1 = durations.seconds} else {var timerinjail1 = ""} 

if (durations.minute > 1 ) {var timerinjail3 = durations.minute}  else {var timerinjail3 = ""} 
if (durations.minute == 1 ) {var timerinjail8 = durations.minute}  else {var timerinjail8 = ""} 

if (durations.hour > 1) {var timerinjail4 = durations.hour} else {var timerinjail4 = ""} 
if (durations.hour == 1) {var timerinjail9 = durations.hour} else {var timerinjail9 = ""}

if (durations.day == 1) {var timerinjail5 = durations.day} else {var timerinjail5 = ""} 
if (durations.day < 365 + durations.day > 1) {var timerinjail4 = durations.day} else {var timerinjail4 = ""} 

if (timerinjail2+timerinjail1 == 0) {var timesec = ""} else {var timesec = timerinjail2+timerinjail1 + " сек "}
if (timerinjail3+timerinjail8 == 0) {var timemin = ""} else {var timemin = timerinjail3+timerinjail8 + " мин "}
if (timerinjail4+timerinjail9 == 0) {var timehou = ""} else {var timehou = timerinjail4+timerinjail9 + " ч "}
if (timerinjail5 == 0) {var timeday = ""} else {var timeday = timerinjail5 + " дн "}
if (timeday + timehou + timemin + timesec == "") {var timerd = "Навсегда"} else {var timerd = timeday + timehou + timemin + timesec}
        let embed = new Discord.RichEmbed()
        embed.setColor('#0e0d0d')
        embed.setFooter(`${gname}`, `${sicon}`)
        embed.setAuthor(`${message.author.username} замутил ${rmember.user.username}`)
        embed.setTimestamp()
        embed.addField("Пользователь", rmember, true)
        embed.addField("Администратор", `<@!${message.author.id}>`, true)
        embed.addField("Длительность", timerd, true)
        embed.addField("Причина", reason, true)
        message.channel.send({ embed })
        rmember.send(`<a:finger_wave:576175222957539328> | Вы были замучены на сервере **${gname}** на **${timerd}** по причине: **${reason}**. Замутил: ${admin}`)
       setTimeout(() => {
        rmember.removeRole(rolejail.id)
        rmember.addRoles(takenroles)
        rmember.removeRole(rolejail.id)
        }, timer)}

  
}

































