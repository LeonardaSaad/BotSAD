const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require("yt-search");



module.exports = {
    run: async (client, msg) => {
        const voiceChannel = msg.member.voice.channel;

        if (!voiceChannel) return msg.channel.send('Você precisa estar em um canal de voz para usar esse comando!');
        if (!msg.content.length > 7) return msg.channel.send("Você precisa colocar o nome do vídeo!");

        const connection = await voiceChannel.join();

        const m = msg.content.split(' ');
        m.shift();
        const music = m.join(' ');
        console.log(music);

        if (query = "undefined" && !music) {
            msg.reply("Você precisa colocar o nome do vídeo!");
        } else {
            const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

            }

            const video = await videoFinder(music);

            if (video) {
                const stream = ytdl(video.url, { filter: "audioonly" });
                connection.play(stream, { seek: 0, volume: 1 }).on("Pronto", () => {
                    voiceChannel.leave();
                });


                let musicEmbed = new Discord.MessageEmbed() //Criei o embed antes do return
                    .setTitle(`Tocando: ***${video.title}***`)
                    .setURL(video.url)
                    .setImage(video.image)
                    .addFields(
                        { name: "Visualizações: ", value: video.views, inline: true },
                        { name: "Duração: ", value: video.duration, inline: true }
                    )
                    .setFooter('BotSAD', 'https://i.imgur.com/L5rZGBN.png')
                    .setColor("#fad73a")

                return msg.channel.send(musicEmbed); //Retornei o embed
            } else {
                msg.channel.send("Vídeo não encontrado!")
            }
        }

    },

    conf: {},

    get help() {
        return {
            name: 'play',
            description: 'Coloca o bot no voiceChannel e a música escolhida pelo usuário',
            usage: 'play',
            category: 'music',
        }
    }






}