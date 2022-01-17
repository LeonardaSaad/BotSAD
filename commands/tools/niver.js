const Discord = require("discord.js");
const express = require('express');
const mongoose = require('mongoose');

const app = express();

module.exports = {
    run: async (client, msg) => {
        const m = msg.content.replace(";-;niver", '');  //Tira o comando
        const mLength = m.length >= 33;     //Verifica se tem data
        const userId = m.slice(4, 22);   //Pega o id

        const user = msg.mentions.users.map(user => {
            db.aniversarios.insertMany({ "_id": userId }, { "nome": user.username });
            msg.reply(`${user.username}`)
        });

        console.log(userId);

        if (!msg.mentions.users.size || !mLength) {
            msg.reply("Por favor, coloque os dados necessários. Ex: ;-;niver @User 01,01,2000");
        } else {
            user;
        }
    },

    conf: {},

    get help() {
        return {
            name: 'niver',
            description: 'O usuário coloca o aniversário dele no banco de dado e todos do servidor são notificados',
            usage: 'niver',
            category: 'tools'
        }
    }
}
