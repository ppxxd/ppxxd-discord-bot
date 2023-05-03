class ArrowMenuWithFields {
    constructor(message, fields, embed) {    
        this._embed = embed;
        this._user = message.author;
        this._channel = message.channel;
        this._pagescount = fields.length;
        this._pages = fields;
        this._client = message.client
        this.start()
    };
    get channel() {
        return this._channel
    };
    async start() {
        var embed = this._embed;
        const foot = this._embed['footer']
        embed['fields'] = this._pages[0];
        embed['footer']['text'] = `Страница 1/${this._pagescount}`
        let msg = await this._channel.send('\u200B', { embed })

        const filter = (reaction, user) => {
            return (reaction.emoji.name == '⬅' || reaction.emoji.name == '➡') && user.id == this._user.id
        }


        var collected;
        var react;
        var page = 0;

        while (true) {
            if (page + 1 < this._pagescount)
            {
                await msg.reactions.removeAll();
                if (page != 0)
                {
                    await msg.react('⬅');
                }
                await msg.react('➡');
            }
            else if (page == this._pagescount)
            {
                await msg.reactions.removeAll();
                await msg.react('⬅');
            }
            try {
                collected = await msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] });
            }
            catch (e) {
                await msg.reactions.removeAll();
                msg.react('❌');
                break;
            }

            react = await collected.first().emoji.name;
            await collected.first().remove(this._user.id)
            if (react == '➡') {
                if (page + 2 > this._pagescount) {
                    continue;
                }
                else {
                    page = page + 1;
                    embed['fields'] = this._pages[page];
                    embed['footer']['text'] = `Страница ${page+1}/${this._pagescount}`
                    await msg.edit({embed})
                }
            }
            else {
                if (page - 1 < 0) {

                    continue;
                }
                else {
                    page = page - 1;
                    embed['fields'] = this._pages[page];
                    embed['footer']['text'] = ` Страница ${page+1}/${this._pagescount}`
                    await msg.edit({
                        embed
                    })
                }
            }
        }
    };
}
class ArrowMenuWithDesc {
    constructor(message, fields, embed) {
        this._embed = embed;
        this._user = message.author;
        this._channel = message.channel;
        this._pagescount = fields.length;
        this._pages = fields;
        this._client = message.client;
        this.start()
    };
    get channel() {
        return this._channel
    };
    async start() {
        var embed = this._embed;
        embed['description'] = this._pages[0];

        let msg = await this._channel.send('\u200B', { embed })

        const filter = (reaction, user) => {
            return (reaction.emoji.name == '⬅' || reaction.emoji.name == '➡') && user.id == this._user.id
        }

        await msg.react('⬅');
        await msg.react('➡');

        var collected;
        var react;
        var page = 0;

        while (true) {

            try {
                collected = await msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] });
            }
            catch (e) {
                await msg.reactions.removeAll();
                msg.react('❌');
                break;
            }

            react = await collected.first().emoji.name;
            await collected.first().remove(this._user.id)
            if (react == '➡') {
                if (page + 2 > this._pagescount) {
                    continue;
                }
                else {
                    page = page + 1;
                    embed['description'] = this._pages[page];
                    await msg.edit({

                        embed
                    })
                }
            }
            else {
                if (page - 1 < 0) {

                    continue;
                }
                else {
                    page = page - 1;
                    embed['description'] = this._pages[page];
                    await msg.edit({
                        embed
                    })
                }
            }
        }
    };
}
module.exports = {
    ArrowMenuWithFields: ArrowMenuWithFields,
    ArrowMenuWithDesc: ArrowMenuWithDesc
}