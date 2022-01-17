const fetch = require('node-fetch')


function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

module.exports = {
  run: async (client, msg) => {
    getQuote().then(quote => msg.channel.send(quote))
  },

  conf: {},

  get help() {
    return {
      name: 'inspiration',
      description: 'Uma inspiração para a sua vida',
      usage: 'inspiration',
      category: 'other'
    }
  }
}
