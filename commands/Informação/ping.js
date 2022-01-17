const { MessageEmbed } = require('discord.js')

module.exports = {
  run: async (client, msg, args) => {
    if (client.ws.ping <= 250) {
      const embed = new MessageEmbed()
        .setDescription(`**:green_circle: ${client.ws.ping} ms**`)
        .setColor(process.env.COLOR);

      msg.channel.send(embed);
    } if (client.ws.ping >= 200 && client.ws.ping <= 500) {
      const embed = new MessageEmbed()
        .setDescription(`**:orange_circle: ${client.ws.ping} ms**`)
        .setColor(process.env.COLOR);

      msg.channel.send(embed);
    } if (client.ws.ping > 500) {
      const embed = new MessageEmbed()
        .setDescription(`**:red_circle: ${client.ws.ping} ms**`)
        .setFooter('BotSAD', 'https://i.imgur.com/L5rZGBN.png')
        .setColor(process.env.COLOR);

      msg.channel.send(embed);
    }
  },

  conf: {},

  get help() {
    return {
      name: "ping",
      description: "Retorna a latêcia do bot",
      usage: 'ping',
      category: 'Informação'
    }
  },
}


