/* 1-10   -> Dramim 
11-20  -> Drama dms
21-30  -> DramaQueen
50-70  -> Gigante de Drama
71-99  -> Super Drama
100    -> Megazord de Drama
200    -> Drama Absoluto
*/


const Discord = require("discord.js");

module.exports = {
    run: async (client, msg) => {
        function Counter(user, pontos) {
            this.user = msg.mentions.users.map(user => {
                return user.username
            });
            this.pontos = 0;
        }

        if (!msg.mentions.users.size) {
            return msg.channel.send('Ninguém foi mencionado! Por favor, coloque o @user de quem está fazendo drama.');
        } else {
            const newUser = new Counter(`${msg.mentions.users.username} ` + this.pontos + 1);
            msg.channel.send(newUser)
        }


        const user1 = new Counter(msg.mentions.users.username, this.pontos + 1);
        console.log(user1);
        //console.log(user1.pontos++);
        switch (true) {
            case this.pontos >= 1 && this.pontos <= 10:
                msg.replay(`, tomou dramim meu anjo?`);
                break;
            case this.pontos >= 11 && this.pontos <= 20:
                msg.replay(`. Caraca, você faz drama demais!`);
                break;
            case this.pontos >= 21 && this.pontos <= 30:
                msg.replay(`. Parabéns **DramaQueen**, quer um prêmio?`);
                break;
            case this.pontos >= 50 && this.pontos <= 70:
                msg.replay(`, você é um **Gigante de Drama**!`);
                break;
            case this.pontos >= 71 && this.pontos <= 99:
                msg.replay(`. Você é um novo Super-herói, o **Super Drama**!`);
                break;
            case this.pontos >= 100 && this.pontos < 200:
                msg.replay(`. Novo golpe desbloqueado: **Megazord de Drama**!`);
                break;
            case this.pontos >= 200:
                msg.replay(`, você é o **Drama Absoluto**`);
                break;
        }
    },

    conf: {},
    
    get help() {
        return {
            name: 'drama',
            description: 'Contador de drama, com ranking',
            usage: 'drama',
            category: 'fun'
        }
    }
}