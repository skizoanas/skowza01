const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591300723942228108")
setInterval(function() {
channel.send(`Spam krwassa ana`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
