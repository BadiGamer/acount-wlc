client.on('guildMemberAdd', member => {
const wlc = member.guild.channels.find("name","chat")
wlc.send(`***___Welcome To Dark Server___ :heart:***
             ***Have A Fun***`)
})






















client.login(process.env.BOT_TOKEN);