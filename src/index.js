const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, // allows discord bot to access all actions listed under this intent (guilds are just discord servers)
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages, // allows bot to listen to messages
        IntentsBitField.Flags.MessageContent // allows bot to read messages
    ]
})

client.login('MTIwMjI5MzU3MTk5OTQ5ODMzMQ.G9DZ1M.G91rVxVhP7ZGunWetiHadFTSA7wp0Ub04xzZsk')