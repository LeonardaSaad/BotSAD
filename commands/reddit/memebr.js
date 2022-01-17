const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const got = require('got');

module.exports = {
	run: async (client, msg) => {
	const embed = new MessageEmbed();
	got('https://www.reddit.com/r/MemesBrasil/random/.json')
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
		name: 'memebr',
		description: 'Retorna no msg.channel um posta aleratório do reddit/r/MemesBrasil',
		usage: 'memebr',
		category: 'reddit',
	}
}
}