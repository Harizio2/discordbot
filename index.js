const Discord = require('discord.js');
const bot = new Discord.Client;

const token = 'NjUxMjk3MzgzNzIzODI3MjAx.XeX8mQ.WkjClQjeRmUdx7Csclv6GlO2G64';

bot.on('ready',() => {
console.log('the bot is online');
})

bot.login(token);