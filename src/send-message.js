require('dotenv').config()

const {Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

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

client.on('ready', async (c) => {
    console.log(`${c.user.username} is online!`)

    try {
        const channel = await client.channels.cache.get('1028487498474737686')
        if (!channel) return

        const row = new ActionRowBuilder()

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        })

        await channel.send({
            content: 'claim or remove a role below',
            components: [row]
        })

        process.exit()
    } catch (error) {
        console.log(error)
    }
})



client.login(process.env.TOKEN)