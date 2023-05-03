const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports =  async function(message,args, client)
{
    if (talkedRecently.has(message.author.id))
        return message.reply('Подождите 2 секунды пожалуйста.')
            .then(message => {message.delete(2500)});;
    talkedRecently.add(message.author.id);
    setTimeout(() => {talkedRecently.delete(message.author.id)}, 2500);

    let category = args.slice(0).join(' ');

    if (!category) return message.channel.send({embed: {
            color: message.member.displayColor,
            author: {
                name: 'ppxxd Discord Bot',
                icon_url: client.user.avatarURL()
            },
            description: "```\nНиже ты можешь увидеть полный список команд, доступных боту.\n\nЕсли вам нужна какая-либо информация по командам, вы можете возпользоваться дополнительной командой по каждому из разделов.\n\nНапример: ~help admin```",
            fields: [{
                name: "ADMIN",
                value: "`ban`**,**`banid`**,**`kick`**,**`mute`**,**`say`**,**`clear`**,**`changenick`"
            },
                {
                    name: "UTILITIES",
                    value: "`channelinfo`**,**`roleinfo`**,**`rolemembers`**,**`userinfo`**,**`serverinfo`**,**`avatar`**,**`roleslist`**,**`emojis`"
                },
                {
                    name: "FUN",
                    value: "`firstly`**,**`flek$$`**,**`poxyi`**,**`question`**,**`whoischop1k`**,**`anime`"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: message.guild.name
            }
        }})
    if (category == "admin") return message.channel.send({embed: {
            color: message.member.displayColor,
            author: {
                name: 'Список админских команд:',
                icon_url: client.user.avatarURL()
            },
            description: "\nЭто полный список админских команд и пример по их использованию. **Примечание**: у команды `ban` и `mute` есть обратная им по значению команда `unban` и `unmute`.",
            fields: [{
                name: "ban",
                value: "`Позволяет забанить пользователя. Пример: ~ban @user#9999 Плохой`"
            },
                {
                    name: "banid",
                    value: "`Позволяет забанить пользователя по айди. Пример: ~ban 4665464564537 Плохой`"
                },
                {
                    name: "kick",
                    value: "`Позволяет кикнуть пользователя. Пример: ~kick @user#9999 Ужасный`"
                },
                {
                    name: "mute",
                    value: "`Позволяет замутить пользователя. Пример: ~mute @user#9999 Плохой`"
                },
                {
                    name: "say",
                    value: "`Повторяет написанный вами текст. Пример: ~say @user#9999 крутой`"
                },
                {
                    name: "clear",
                    value: "`Очищает сообщения в канале (а так же пользователя). Пример: ~clear 50 или ~clear @user#9999 50`"
                },
                {
                    name: "changenick",
                    value: "`Изменяет ник пользователя на сервере. ~changenick @user#9999`"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: message.guild.name
            }
        }})
    if (category == "utilities") return message.channel.send({embed: {
            color: message.member.displayColor,
            author: {
                name: 'Список команд-утилит:',
                icon_url: client.user.avatarURL()
            },
            fields: [{
                name: "avatar",
                value: "`Показывает аватар пользователя или ваш. Пример: ~avatar <user> или <@user#9999>`"
            },
                {
                    name: "roleslist",
                    value: "`Показывает список ролей на сервере и кол-во участников в роли`"
                },
                {
                    name: "channelinfo",
                    value: "`Показывает информацию о текущем/указанном канале.`"
                },
                {
                    name: "serverinfo",
                    value: "`Показывает информацию о сервере.`"
                },
                {
                    name: "userinfo",
                    value: "`Показыват информацию о вас/указанном пользователе. Пример: ~userinfo @user#9999`"
                },
                {
                    name: "roleinfo",
                    value: "`Показыват информацию о роли. Пример: ~roleinfo @Moderators`"
                },
                {
                    name: "rolemembers",
                    value: "`Показывает список участников роли. Пример: ~rolemembers @Admins`"
                },
                {
                    name: "emojis",
                    value: "`Показывает список эмодзи на сервере. Пример: ~emojis`"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: message.guild.iconURL(),
                text: message.guild.name
            }
        }})
}