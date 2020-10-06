const Discord = require("discord.js");
module.exports =  async function(message,args,client){ 
  let sicon = message.guild.iconURL();
  let gname = message.guild.name;
  let reason = args[2]
  if (!reason) reason = "Не указана";
  if (args[0]){
    try {
    let id = client.users.cache.find(user1 => user1.username == args[0]).id
    let rmember = message.member.guild.members.cache.get(id);
    let takenroles = rmember.roles.cache
    const rolejail = message.guild.roles.cache.find(role1 => role1.name == "Замученный") || message.guild.roles.cache.find('name', "Muted")



rmember.roles.remove(takenroles)
setTimeout(() => {
 rmember.roles.add(rolejail.id)
 }, 1000)




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
    





let embed = new Discord.MessageEmbed()
    embed.setColor('#0e0d0d')
    embed.setFooter(`${gname}`, `${sicon}`)
    embed.setAuthor(`${message.author.username} замутил ${rmember.user.username}`)
    embed.setTimestamp()
    embed.addField("Пользователь", rmember, true)
    embed.addField("Администратор", `<@!${message.author.id}>`, true)
    embed.addField("Длительность", timerd, true)
    embed.addField("Причина", reason, true)
    message.channel.send({ embed })
        setTimeout(() => {
          rmember.roles.remove(rolejail.id)
          rmember.roles.add(takenroles)
          rmember.roles.remove(rolejail.id)
          message.channel.send({embed: {
            color: 0x0e0d0d,
            author: {name: `${rmember.user.username} был размучен`},
            timestamp: new Date(),
            fields:[{ name: "Пользователь",
                      value: rmember, 
                      inline: true},
                    { name: "Длительность",
                      value: timerd, 
                      inline: true},
                    { name: "Замучен по причине",
                      value: reason, 
                      inline: true}],
            footer: {text: gname,icon_url: sicon,} }})
          }, timer)
        }
        catch (err) {message.reply('Ник должен быть **полным** и **c учетом регистра**.')}
      
      
      
}
 
 
















  
}

































