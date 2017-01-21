const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MjMwMjM4NzE2OTI3NDEwMTc2.C2VQtg.n89zIpnaD803trl9eTsOYpZXDFk');
