require('dotenv').config()

const {Client, IntentsBitField, EmbedBuilder} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, // allows discord bot to access all actions listed under this intent (guilds are just discord servers)
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages, // allows bot to listen to messages
        IntentsBitField.Flags.MessageContent // allows bot to read messages
    ]
})

const roles = [
    {
        id: '1218305115354562711',
        label: 'orange'
    },
    {
        id: '1218305284305588274',
        label: 'green'
    },
    {
        id: '1218305185026277407',
        label: 'blue'
    }
]

client.on('ready', (c) => {
    console.log(`${c.user.username} is online!`)
})

client.login(process.env.TOKEN)