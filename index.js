//Faz requerimento da classe discord.js que e necessario
const { Client, Intents, Interaction } = require('discord.js');

//Recebe o valor de token que esta dentro de config.json
const { token } = require('./config.json');

//cria um novo cliente Discord
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//Evento dispara, assim que o bot estiver pronto e online
client.once('ready', () => {
	console.log('Ready!');
});

//Bot Simples para Servidor Discord

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    
    const { commandName } = interaction;
    
    if (commandName === 'ping')
    {
        await interaction.reply('pong!');
    } 
    else if (commandName === 'beep')
    {
        await intersection.reply('boop!');
    }
    else if (commandName === 'servidor')
    {
        await interaction.reply(`Nome do Servidor: ${interaction.guild.name}\nTotal de viciados em API: ${interaction.guild.memberCount}`);
    }
    else if (commandName === 'user')
    {
        await intersection.reply(`Seu nome: ${interaction.user.username}\nSeu Id: ${interaction.user.id}`);
    }
});

//Faz o login do seu bot usando o paramentro que foi passado acima
client.login(token);