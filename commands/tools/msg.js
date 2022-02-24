const Discord = require('discord.js');


module.exports = {
    run: async (client, msg, args) => {
        const msgC = msg.content;

        const mention = (`<@!${msgC.replace(/\D/gim, '')}>`)
        console.log(mention)

        const menssagem = msgC.replace(`;-;msg ${mention}`, "");
        console.log(menssagem)


        if (!msg.mentions.users.size || !menssagem) {
            return msg.channel.send('Ninguém foi mencionado ou nenhuma mensagem foi colocada! Por favor, coloque o @User e a mensagem.');
        } else {
            msg.channel.send(mention + " " + menssagem)
        }

        msg.delete();

    },

    conf: {},

    get help() {
        return {
            name: "msg",
            description: "Manda uma mensagem",
            usage: "msg",
            category: 'tools'
        }
    }

}