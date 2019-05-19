client.on('ready',async () => {//Toxic Codes
console.log("Starting..");//Toxic Codes
let g = client.guilds.get("576401840518856704"); // id server
let c = g.channels.get("576780380934504448");// id channel
if(c.type === 'voice') {//Toxic Codes
c.join();//Toxic Codes
setInterval(() => {//Toxic Codes
if(!g.me.voiceChannel) c.join();
}, 1);//Toxic Codes
} else {//Toxic Codes
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
});






















client.login(process.env.BOT_TOKEN);
