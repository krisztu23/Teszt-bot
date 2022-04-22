const Discord = require ("discord.js")
require("dotenv").config()

const TOKEN = "OTY3MTE3MDg5MTE2NjcyMTEx.YmLn-g.MX40RHYzIfk5wMxynm9j0tAAXPY"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () =>{
    console.log(`Sikeresen Belépett ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "Sziasztok"){
        message.reply("Szia")
    }
})

client.login(process.env.TOKEN)