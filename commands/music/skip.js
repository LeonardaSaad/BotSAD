module.exports = {
    run: async (client, msg, args) => {
        const channel = msg.member.voice.channel;
        if (!channel) return msg.channel.send('Você deve estar em um canal de voz para utlizar esse comando!');
        let queue = msg.client.queue.get(msg.guild.id)
        if (!queue) {
            return msg.channel.send({
                embed: {
                    description: 'Nada está tocando no momento para eu poder pular!',
                    color: 'BLACK'
                }
            })

        }
        if (queue.songs.length !== 0) {
            msg.react('Assista ao video para aprender a configurar caso não saiba')
            queue.connection.dispatcher.end('a música foi pulada!')
        }
    },


    conf: {},

    get help() {
        return {
            name: 'skip',
            description: 'Pula a música tocando no bot',
            usage: 'skip',
            category: 'music'
        }
    }
}


