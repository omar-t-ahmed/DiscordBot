require('dotenv').config()

const {REST, Routes} = require('discord.js')

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    }
]

const res = new REST({version: '10'}).setToken(process.env.TOKEN)

(async () => {
    try {
        await REST.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
            )
    } catch (error){
        console.log(`${error}`)
    }
})()