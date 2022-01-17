module.exports = {
    run: async (client, msg) => {
        msg.channel.send('<@!268151490772729857>, Roblox Marcelinho?!?!')
    },


    conf: {},

    get help() {
        return {
            name: 'roblox',
            description: 'Piada',
            usage: 'roblox',
            category: 'fun'
        }
    }
}