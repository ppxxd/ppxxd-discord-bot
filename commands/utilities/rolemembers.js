const Discord = require("discord.js");
const talkedRecently = new Set();
const Menu = require('../../files/Menu')

module.exports = async function (message, args) {
  if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
  if (talkedRecently.has(message.author.id))
    return message.reply('Подождите 2 секунды пожалуйста.')
      .then(message => {
        message.delete(2500)
      });;
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id)
  }, 2500);
  let nud = args.slice(0).join(' ');
  let role = message.mentions.roles.first() || message.guild.roles.get(nud) || message.guild.roles.find(role => role.name === nud)
  if (!role) return message.reply('Укажите роль.')
let members = role.members.array();
var fields = [];
var temparr = []

for (i = 0; i < members.length; i++) {
  temparr.push(
    {
      "name": members[i].user.tag,
      "value": `<@${members[i].id}>`,
      "inline": true
    }
  )
  if (i % 15 == 0 && i != 0) {
    fields.push(temparr)
    temparr = []
  }
}
if (temparr.length != 0) fields.push(temparr)

new Menu.ArrowMenuWithFields(message, fields, {
  "timestamp": new Date(),
  "color": role.color,
  "footer": {
    "icon_url": ``,
    "text": message.author.username
  },
  "author": {
    "name": `Список участников роли - ${role.name}`,
    "icon_url": ``
  },
}) 


 
}



   






/*const Discord = require("discord.js");
const moment = require('moment');
const talkedRecently = new Set();
module.exports =  async function(message,args){
    if (!message.channel.permissionsFor(message.member).has("SEND_MESSAGES", false)) return message.reply('Получите какую-нибудь роль для выполнения команд');
if (talkedRecently.has(message.author.id))
  return message.reply('Подождите 2 секунды пожалуйста.')
  .then(message => {
    message.delete(2500)
  });;
talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id)
}, 2500);
let nud = args.slice(0).join(' ');
let role = message.mentions.roles.first() || message.guild.roles.get(nud) || message.guild.roles.find(role => role.name === nud)
if (!role) return message.reply('Укажите роль.')
let embed = new Discord.RichEmbed()
    embed.setColor(role.hexColor)
    embed.setTimestamp()
    embed.setTitle(`Участники ${role.name}`)
    embed.setDescription(`<@!${message.guild.roles.get(role.id).members.map(m=>m.user.id).join('>\n <@!')}>`, true);
    message.channel.send({embed}).then(msg => { 
      
       msg.react('⏪').then( r => { 
         msg.react('⏩') 
        
         const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
         const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
        
         const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
         const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 

         let pages = [`${embed}`, `${embed}`, `${embed}`, `${embed}`, `${embed}`, `${embed}`]; 
         let page = 1;        
         
         backwards.on('collect', r => { 
           if (page === 1) return; 
           page--; 
           embed.setDescription(pages[page-1]); 
           embed.setFooter(`Страница ${page} из ${pages.length}`); 
           msg.edit(embed) 
         })
        
         forwards.on('collect', r => { 
           if (page === pages.length) return; 
           page++; 
           embed.setDescription(pages[page-1]); 
           embed.setFooter(`Страница ${page} из ${pages.length}`); 
           msg.edit(embed) 
         })
      
       })
    
     })
    
   }*/        
