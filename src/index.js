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
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number')?.value
        const num2 = interaction.options.get('second-number')?.value
        
        interaction.reply(`The sum is ${num1 + num2}`)
    }

    if (interaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
            .setTitle('embed title')
            .setDescription('embed description')
            .setColor('Random')
            .addFields({name: 'title', 
            value: 'value',
            inline: true
            },
            {name: 'title2', 
            value: 'value2',
            inline: true
            })
        interaction.reply({embeds: [embed]})
    }
})

client.on('messageCreate', ((message) => {
    if (message.content === 'embed') {
        const embed = new EmbedBuilder()
            .setTitle('embed title')
            .setDescription('embed description')
            .setColor('Random')
            .addFields({name: 'title', 
            value: 'value',
            inline: true
            },
            {name: 'title2', 
            value: 'value2',
            inline: true
            })

        message.channel.send({embeds: [embed]})
    }
}))

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;
    await interaction.deferReply({ ephemeral: true })

    const role = interaction.guild.roles.cache.get(interaction.customId)
    if (!role) {
        interaction.editReply({
            content: 'I couldnt find that role'
        })
        return
    }

    const hasRole = interaction.member.roles.cache.has(role.id)

    if (hasRole) {
        await interaction.member.roles.remove(role)
        await interaction.editReply(`${role} role has been removed!`)
        return
    }

    await interaction.member.roles.add(role)
})

client.login(process.env.TOKEN)