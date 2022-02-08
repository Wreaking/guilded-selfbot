const { Client, Embed} = require("@guildedjs/guilded.js");//same as djs
require('dotenv').config()

const client = new Client();
const prefix = "!"
client.on('ready', () => console.log(`Bot is successfully logged in`));


client.on("messageCreate", message => {
    if(message.content === "embed") {
      
         message.channel.send(
          new Embed()
   
          .setTitle('Working')
          .setDescription("Finally worked")
       
        )
    }
})



client.login({
    email: process.env.EMAIL,
    password: process.env.PASSWORD
});//login to your account coz its a selfbot
