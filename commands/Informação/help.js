const { MessageEmbed } = require('discord.js');
const prefix = process.env.PREFIX;

module.exports ={ 
  run: async (client, msg) => {
    const embed = new MessageEmbed()
      .setTitle('Comandos disponíveis')
      .setDescription(`
        **__Geral:__**
        **${prefix}avatar <@usuário> -** Mostra o avatar de alguém que você mensionar;
        **${prefix}enigma: -** ... . / ...- .. .-. .-;
        **${prefix}help -** Mostra todos os comandos do bot;
        **${prefix}inspiration -** Mostra uma frase para inspirar a sua vida, ou nem tanto. (Inglês);
        **${prefix}ping: -** Mostra a taxa de latência do bot;
        **${prefix}timer -** Coloque o comando, o tempo e se é hour, min ou sec, assim que o timer acabar o bot te avisa;

        **__Música:__**
        **${prefix}play**: coloque o nome do vídeo que você quer ver e se divirta;
        **${prefix}leave**: o bot sai do canal de voz;


        **__Reddit:__**
        **${prefix}meme -** memes do subreddit r/memes (Inglês);
        **${prefix}memebr -** memes do subreddit r/MemesBrasil;
      `)
      .setFooter('BotSAD', 'https://i.imgur.com/L5rZGBN.png')
      .setColor(process.env.COLOR);
    msg.channel.send(embed)
  },

  conf: {},

  get help() {
    return {
      name: "help",
      description: "Mostra os comandos disponíveis",
      usage: 'help',
      category: 'Informação'
    }

}


}