module.exports = {
    run: async (client, msg) => {
        const tempo = parseFloat(msg.content.replace(";-;timer ",''));

        const segundos = msg.content.match('sec');
        const minutos = msg.content.match('min');
        const horas = msg.content.match('hour');

        const sec = tempo*1000;
        const min = tempo*60000;
        const hour = tempo*3600000;
        
        switch (true) {
            case !tempo && !horas && !minutos && !segundos :
                msg.reply(' depois do comando, coloque o tempo e a medida de tempo que você quer no timer! Ex: ;-;timer 20 sec');
                break;
            case horas == 'hour' : 
                msg.reply(' daqui a pouco eu te aviso!');
                setTimeout( function () { msg.reply(` acabou seu tempo [${tempo} hour] :gun:`) }, hour);
                break;
            case minutos == 'min' :
                msg.reply(' daqui a pouco eu te aviso');
                setTimeout( function () { msg.reply(` acabou seu tempo [${tempo} min] :gun:`) }, min);
                break;
            case segundos == 'sec' :
                msg.reply(' daqui a pouco eu te aviso!');
                setTimeout( function () { msg.reply(` acabou seu tempo [${tempo} sec] :gun:`) }, sec);
                break;
        }

        // if (!tempo && !horas && !minutos && !segundos) {
        //     msg.reply(' depois do comando, coloque o tempo e a medida de tempo que você quer no timer!');

        // }
        // if (horas == 'hour') {
        //     msg.reply(` daqui a pouco eu te aviso!`);
        //     setTimeout(function () { msg.reply(' acabou o seu tempo :gun:') }, hour);

        // }
        // if (minutos == 'min') {
        //     msg.reply(`daqui a pouco eu te aviso!`);
        //     setTimeout(function () { msg.reply(' acabou o seu tempo :gun:') }, min);

        // }
        // if (segundos == "sec") {
        //     msg.reply(` daqui a pouco eu te aviso!`);
        //     setTimeout(function () { msg.reply(' acabou o seu tempo :gun:') }, sec);
        
        // }
    },

    conf: {},

    get help() {
        return {
            name: 'timer',
            description: 'Usuário coloca um tempo x em que ele será notificado.',
            usage: 'timer',
            category: 'tools'
        }
    }


};

