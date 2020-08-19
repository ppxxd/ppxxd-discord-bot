const Discord = require("discord.js");
const client = new Discord.Client();
module.exports =  async function(message){if (!message.channel.permissionsFor(message.member).has("ADMINISTRATOR", false)) return message.reply('Получите какую-нибудь роль для выполнения команд.');
let sicon = message.guild.iconURL;
let gname = message.guild.name;
const casino = message.guild.channels.find('id', "538470957313032202");
const flood = message.guild.channels.find('id', "538475988347256833");
const ceo = message.guild.roles.find('name', "CEO");
const co = message.guild.roles.find('name', "Co-Founder");
const nsfw = message.guild.roles.find('name', "NSFW");
const anime = message.guild.roles.find('name', "🌸Anime");
const slap = message.guild.roles.find('name', "slap");
const free = message.guild.roles.find('name', "free");

const plus = message.guild.roles.find('name', "Project Plus");
const pro = message.guild.roles.find('name', "Project Pro");
const prem = message.guild.roles.find('name', "Project Premium");
const elite = message.guild.roles.find('name', "Project Elite");
const exclusive = message.guild.roles.find('name', "Project Exclusive");
const supreme = message.guild.roles.find('name', "Project Supreme");

  let embed = new Discord.RichEmbed()
  embed.setColor('#f1c40f')
  embed.setAuthor(`Система ролей`, `${sicon}`)
  embed.addField(`С сегодняшнего дня на сервере введена **новая система ролей** <a:pikagirl:580805139888341002>`,`Теперь вы будете получать роль выше за счет общения в текстовых каналах <a:hyper:580805137296261140> Бот отвечающий за систему ролей - <@!172002275412279296>. Для того чтобы посмотреть топ сервера перейдите по данной ссылке [**клик**](https://tatsumaki.xyz/serverRankings/535182638588362802) или введите команду **+top** в канале ${flood}`)
  embed.addField(`<a:ahegao:580805139665780767> Список ролей и очки для их получения:`,`${plus} - **2500** Очков\n${pro} - **5000** Очков\n${prem} - **7500** Очков\n${elite} - **10000** Очков\n${exclusive} - **15000** Очков\n${supreme} - **20000** Очков`)
  message.delete().catch(O_o => { });
  message.channel.send(`@everyone <a:tag:567959848885420032>`, {embed})


/*  embed.addField("О сервере󠀀󠀀", "󠀀󠀀Сервер представляет собой сервер для общения, это не коммьюнити, это не еще что-либо. Мы так же не имеем какого-либо отношения к другим серверам <:thinkzerotwo:549606323126403083>")
  embed.addField("Администрация сервера", `Главные администраторы сервера - ${ceo}`)
  embed.addField("Кастомные роли", 'На сервере присутствуют "Кастомные роли". Чтобы получить такую роль, напишите любому из администраторов. Но, есть одно условие - 1 роль на человека.')
  embed.addField("Правила сервера", "Главное правило сервера - не быть муд*ком. Так же запрещается нарушать ToS Discord <:surprisedzerotwo:549607298553872404>")
  embed.addField("Экономика сервера", `На сервере присутсвует своя экономика. Для более подробной информации пройдите в канал ${casino}.`)
  embed.addField("Инвайты", "Сервер полностью открыт для всех желающих. Инвайты могут создавать все <:hizerotwo:549607298276917268>")
  embed.addField("Выдача ролей", `Чтобы получить некоторые роли достаточно кликнуть по эмодзи снизу.\n\n ${anime} - <:love:579415748154228921>    ${free} - <:profit:579418059622580237>    ${slap} - <:p1ng:579415491958013972>    ${nsfw} - :underage:`)*/





















}