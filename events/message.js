const Discord = require('discord.js');


module.exports = async (client, msg) => {
  if (msg.content.indexOf(process.env.PREFIX) !== 0) return

  const args = msg.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/g)
  const command = args.shift().toLowerCase()


  const cmd = client.commands.get(command)
  if (!cmd) return

  console.log(
    'log',
    `${msg.author.username} (${msg.author.id}) executou o comando: ${cmd.help.name}`,
  )
  if (cmd.conf.onlyguilds && !msg.guild) return
  cmd.run(client, msg, args)
}