const Discord = require("discord.js");
const client = new Discord.Client();
const { msgEmbed } = require('discord.js');
const mongoose = require('mongoose');
require('dotenv').config();
const fs = require("fs");
const prefix = process.env.PREFIX;
const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require('./utils');

client.commands = new Collection();
client.startTime = Date.now();

loadCommands(client.commands, './commands');
loadEvents('./events', client)


client.on("ready", async () => {
    console.log(`Logado com o bot ${client.user.tag}`);
    client.user.setActivity('Música triste ;-;', { type: 'LISTENING' });


    //MongoDB
    /*mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database conectada com sucesso!');
    }).catch((err) => {
        console.log(err);
    })*/
});

client.on("message", async (msg) => {


    //Créditos
    /*if (!msg.author.bot) {
        if (!msg.guild) return;
        if (!msg.author.bot) {
            console.log(`${msg.author.username}: ${msg.content}`);
            const args = msg.content.split(" ");
            if (commands[args[0]]) commands[args[0]](client, msg);
        }
    }*/


    // Conversa com o bot
    if (msg.content == "oi <@!738054571074781246>" || msg.content == "Oi <@!738054571074781246>" || msg.content == "olá <@!738054571074781246>" || msg.content == "Olá <@!738054571074781246>") {
        msg.reply('Olá! Tudo bem?')
    }
    if (msg.content == "sim <@!738054571074781246>" || msg.content == "Sim <@ !738054571074781246>" || msg.content == "Eu to bem <@!738054571074781246>" || msg.content == "eu to bem <@!738054571074781246>" || msg.content == "ss <@!738054571074781246>") {
        msg.reply('Que bom amigo! :)')
        setTimeout(function () { msg.channel.send('Ei, qualquer coisa me chama, é só usar ";-;help"') }, 2200);
    }
    if (msg.content == "não <@!738054571074781246>" || msg.content == "Não <@!738054571074781246>") {
        msg.reply('Eita! Confia em mim, vai ficar tudo bem! :)')
        setTimeout(function () { msg.channel.send('Ei, qualquer coisa me chama, é só usar ";-;help"') }, 2200);
    }

    



    
    //DM
    const hello = 'oi' || 'oii' || 'ola' || 'olá' || 'Oi' || 'Oii' || 'Ola' || 'Olá';
    const yes = 'sim' || 'simm' || 'siimm' || 'Sim' || 'Simm' || 'ss' || 's' || 'claro' || 'Claro';

    if (msg.content === hello && msg.channel.type === 'dm') {
        msg.author.send('Olá! Precisa de ajuda?');
    }
    if (msg.content === yes && msg.channel.type === 'dm') {
        msg.author.send('Eu sei algo que vai te ajudar. Pera aí!');
        const embed = new msgEmbed()
            .setTitle('Comandos disponíveis')
            .setDescription(`
        **${prefix}avatar <@usuário> -** Mostra o avatar de alguém que você mensionar;
        **${prefix}dramaqueen -** !!EM BREVE!!;
        **${prefix}enigma: -** ... . / ...- .. .-. .-;
        **${prefix}help -** Mostra todos os comandos do bot;
        **${prefix}inspiration -** Mostra uma frase para inspirar a sua vida, ou nem tanto. (Inglês);
        **${prefix}ping: -** Mostra a taxa de latência do bot;
        **${prefix}timer -** Coloque o comando, o tempo e se é hour, min ou sec, assim que o timer acabar o bot te avisa;

        **Reddit:**
        **${prefix}meme -** memes do subreddit r/memes (Inglês);
        `)
            .setFooter('BotSAD', 'https://i.imgur.com/L5rZGBN.png')
            .setColor('#fad73a');
        msg.author.send(embed)
    };




});















client.login(process.env.DISCORD_TOKEN);
