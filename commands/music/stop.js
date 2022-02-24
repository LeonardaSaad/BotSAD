module.exports = {
    run: async (client, msg, args) => {
        if (!msg.member.voice.channel) return msg.channel.send('Você deve estar em um canal de voz para utlizar esse comando!');
    },


    conf: {},

    get help() {
        return {
            name: 'stop',
            description: 'Para a música tocando',
            usage: 'stop',
            category: 'music'
        }
    }
}