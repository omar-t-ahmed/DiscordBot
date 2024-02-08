require('dotenv').config()

const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, // allows discord bot to access all actions listed under this intent (guilds are just discord servers)
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages, // allows bot to listen to messages
        IntentsBitField.Flags.MessageContent // allows bot to read messages
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.username} is online!`)
})

client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return
    }
    if (msg.content === 'hello' || msg.content === 'hi' || msg.content === 'hey') {
        msg.reply(`hey ${msg.author.username}!`)
    }

    if (msg.content === 'whats your name?') {
        msg.reply(`I'm ${c.user.username}!`)
    }
})

client.on('interactionCreate', (interaction) => {
    if (!InteractionCollector.isChatInputCommand()) return;

    console.log(interaction)
})

client.login(process.env.TOKEN)