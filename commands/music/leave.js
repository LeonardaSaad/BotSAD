const Discord = require ('discord.js');

module.exports = {
    run: async (client, msg, args) => {
    const voiceChannel = msg.member.voice.channel;

    if (!voiceChannel) return msg.channel.send('Você precisa estar em um canal de voz para usar esse comando!');

    await msg.channel.send('Saindo... :smiling_face_with_tear:');
    await voiceChannel.leave();
    },

    conf: {},

    get help () {
        return {
            name: 'leave',
            description: 'Tira o bot do voiceChannel',
            usage: 'leave',
            category: 'music'
        }
    }



}