const Sabrina = require ("discord.js")


const client = new Sabrina.Client
const config = require("./config.json");


	client.on('message', message => {
		if (message.author.bot) {
			return;
		};
		if (message.channel.type == 'dm') {
			return;
		};
		if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) {
			return;
		};
		if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
			return;
		};
	
		const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
	
		const command = args.shift().toLowerCase();
	
		try {
			const commandFile = require(`./commands/${command}.js`)
			
			commandFile.run(client, message, args)    
		} catch (err) {
			
	
			
			console.error(`Um erro encontrado em meu banco de dados, Olhe o erro:\n${err}`);
			let log5 = new Sabrina.MessageEmbed()
			.setColor('')
	
			
		
			.setTitle(``)
		
			 .setDescription(``)    
			
		
		   .setTimestamp();
			
	message.channel.send(log5)
	

	
	
	}
	
	});

client.login(config.token);
