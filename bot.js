const mineflayer = require('mineflayer');
const config = require('./config.json');

function createBot() {
    console.log(`[*] Connecting to ${config.host}:${config.port}...`);
    
    const bot = mineflayer.createBot({
        host: config.host,
        port: config.port,
        username: config.username,
        auth: config.auth, 
        version: config.version
    });

    bot.on('login', () => {
        console.log(`[+] Successfully logged in as ${bot.username}`);
    });

    bot.on('spawn', () => {
        console.log(`[+] Bot has spawned in the world!`);
        
        if (config.skinName && config.skinName.trim() !== "") {
            console.log(`[*] Requesting custom skin: ${config.skinName}`);
            bot.chat(`/skin set ${config.skinName}`);
        }

        if (config.displayName && config.displayName.trim() !== "") {
            console.log(`[*] Setting custom display name to: ${config.displayName}`);
            bot.chat(`/nick ${config.displayName}`);
        }
        
        console.log(`[*] Starting anti-AFK static movement loop.`);
        
        setInterval(() => {
            bot.setControlState('jump', true);
            bot.setControlState('jump', false);
            
            bot.look(Math.random() * Math.PI * 2, 0); 
        }, 5000);
    });

    bot.on('kicked', (reason) => {
        console.log(`[-] Bot was kicked. Reason: ${reason}`);
    });

    bot.on('error', (err) => {
        console.log(`[-] Connection Error: ${err.message}`);
    });

    bot.on('end', () => {
        console.log(`[!] Disconnected from server. Attempting to reconnect in 10 seconds...`);
        setTimeout(createBot, 10000);
    });
}

createBot();