const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const got = require('got');

module.exports = {
	run: async (client, msg, args) => {
		const embed = new MessageEmbed();
		got('https://www.reddit.com/r/memes/random/.json')
			.then(response => {
				const [list] = JSON.parse(response.body);
				const [post] = list.data.children;

				const permalink = post.data.permalink;
				const memeUrl = `https://reddit.com${permalink}`;
				const memeImage = post.data.url;
				const memeTitle = post.data.title;
				const memeUpvotes = post.data.ups;
				const memeNumComments = post.data.num_comments;

				embed.setTitle(`${memeTitle}`);
				embed.setURL(`${memeUrl}`);
				embed.setColor('#fad73a');
				embed.setImage(memeImage);
				embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

				msg.channel.send(embed);
			})
			.catch(console.error);
	},

	conf: {},

	get help() {
		return {
			name: 'meme',
			description: 'Retorna no msg.channel um post aleatório do reddit/r/memes',
			usage: 'meme',
			category: 'reddit'
		}
	},

}

