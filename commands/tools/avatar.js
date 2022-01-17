const Discord = require('discord.js');

module.exports = {
    run: async (client, msg) => {
        if (!msg.mentions.users.size) {
            return msg.channel.send('Ninguém foi mencionado! Por favor, coloque o @User de quem você quer ver o avatar.');
        };
        const avatarList = msg.mentions.users.map(user => {
            const avatarEmbed = new Discord.MessageEmbed() //Criei o embed antes do return
                .setTitle(`Avatar de ${user.username}`)
                .setImage(`${user.displayAvatarURL({ size: 1024 })}`)
                .setFooter('BotSAD', 'https://i.imgur.com/L5rZGBN.png')
                .setColor("#fad73a");
            msg.channel.send(avatarEmbed)
        })
    },

    conf: {},

    get help() {
        return {
            name: 'avatar',
            discription: 'Mostra o avatar do usuário mensionado.',
            usage: 'avatar',
            category: 'tools'
        }
    }
}



