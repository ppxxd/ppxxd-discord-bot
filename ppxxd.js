const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  { ws: { intents: Discord.Intents.ALL } }
  console.log(`\nБот запущен.\nСерверов: ${client.guilds.cache.size}\nКаналов: ${client.channels.cache.size}\nУчастников: ${client.users.cache.size}`);
  client.user.setActivity("~help", {
    type: "WATCHING",
    url: "https://www.twitch.tv/monstercat"
  })
});

client.on("guildCreate", guild => {
  console.log(`Добавлен новый сервер. ${guild.name} (id: ${guild.id}). ${guild.memberCount} участников!`);
  client.user.setActivity("~help", {
    type: "WATCHING",
    url: "https://www.twitch.tv/monstercat"
  });
});

client.on("guildDelete", guild => {
  console.log(`Бот был кикнут с сервера ${guild.name} (id: ${guild.id})`);
  client.user.setActivity("~help", {
    type: "WATCHING",
    url: "https://www.twitch.tv/monstercat"
  });
});


client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

// Все команды начинаются здесь.

//  Общие команды:
  if (command === 'help') require(__dirname + '/commands/help.js')(message,args,client);
  // if (command == 'test1') require(__dirname + '/commands/test1.js')(message,args,client);
  // if (command == 'test2') require(__dirname + '/commands/test2.js')(message,args,client);
  // if (command == 'test3') require(__dirname + '/commands/test3.js')(message,args,client);

// Секретное (Не нужное обществу):
  if (command === 'resetallnicks') require(__dirname + '/commands/secret/resetallnicks.js')(message);
  if (command === 'allnicks') require(__dirname + '/commands/secret/allnicks.js')(message,args,client);
  if (command === 'stats') require(__dirname + '/commands/secret/stats.js')(message,client);
  if (command === 'colors') require(__dirname + '/commands/secret/colors.js')(message,client,config);
  if (command === 'serverslist') require(__dirname + '/commands/secret/serverslist.js')(message,client,config);
  if (command === 'leavethis') require(__dirname + '/commands/secret/leavetheserver.js')(message,client,args,config);

// Админские команды:
  if (command === "say") require(__dirname + '/commands/admin/say.js')(message,args);
  if (command === "changenick") require(__dirname + '/commands/admin/changenick.js')(message,args);
  if (command === "kick") require(__dirname + '/commands/admin/kick.js')(message,args,client);
  if (command === "ban") require(__dirname + '/commands/admin/ban.js')(message,args,client);
  if (command === "banid") require(__dirname + '/commands/admin/banid.js')(message,args,client);
  if (command === "unban") require(__dirname + '/commands/admin/unban.js')(message,args);
  if (command === "clear") require(__dirname + '/commands/admin/clear.js')(message,args);
  if (command === "mute") require(__dirname + '/commands/admin/mute.js')(message,args,client);
  if (command === "unmute") require(__dirname + '/commands/admin/unmute.js')(message,args,client);

// Утилиты:
  if (command === "userinfo") require(__dirname + '/commands/utilities/userinfo.js')(message,args,client);
  if (command === "roleinfo") require(__dirname + '/commands/utilities/roleinfo.js')(message,args);
  if (command === "rolemembers") require(__dirname + '/commands/utilities/rolemembers.js')(message,args);
  if (command === "serverinfo") require(__dirname + '/commands/utilities/serverinfo.js')(message);
  if (command === "channelinfo") require(__dirname + '/commands/utilities/channelinfo.js')(message,args,client);
  if (command === "avatar") require(__dirname + '/commands/utilities/avatar.js')(message,args,client);
  if (command === "roleslist") require(__dirname + '/commands/utilities/roleslist.js')(message);
  if (command === "emojis") require(__dirname + '/commands/utilities/emojis.js')(message);
  if (command === "ping") require(__dirname + '/commands/utilities/ping.js')(message,client);

})
client.login(config.token);        