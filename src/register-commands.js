require('dotenv').config()

const {REST, Routes, ApplicationCommandOptionType} = require('discord.js')

const commands = [
    {
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'first-number',
                description: 'first num',
                type: ApplicationCommandOptionType.Number
            },
            {
                name: 'second-number',
                description: 'second num',
                type: ApplicationCommandOptionType.Number
            },
        ]
    }
]

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('registering slash commands')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
            )

        console.log('registered!')
    } catch (error){
        console.log(`${error}`)
    }
})()