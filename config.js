const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0MrcDlHUjNJRzFoRmZDeXhMbEtsdzlDUG1iQzI5VjRYb25WL2JjRU9XRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1ZWYnpQV25xZVZLdkh3S095cDI4aEhqNnp5RFZ3MWZvTnMvMnhyOGlTVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJT2RIdDdNN014b0E5c3V2OWtRNjF1SDcrZ1BoTXdEanBCMnVFeDBmVTFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Mm1rVllpWHIxMFJON24wcXFjbVUrZzhNcEdQRXRTQ1Q2NFZMMkQ1WFdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNd2FBQ3BvSm1DcUlCMnRhSXNwb2pNR2JBOGhNNkp1c0F6ZGxTd2IwMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNwOG1jN2VXby9pN05tbHcrMzFtSGYzeFNTUTB1TURISCtaZVRlZEhzMm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5ycVJUN0Y3clNhOFIrV0VrYnVUVzIrOHVpQTZYTGFRUWxzTGpwUUQybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDU2N0kvMnBTaWRTU3JlT2tNQ2NiTnNRcmd3WEFoVTZwY0wyV2VTbklSbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlBdzVxMGNqaXUyLzJ1WjZlODkvZmdaRysyOTB4dDhVdGZoUC90NDkzbXdCY0I2eU5lUGs2U1E4UzhNampoUlA1SjhtZUhVR1N3RmEyeEkvZkRPVERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJrS1dwWHQ4ckhaK09qTFlZUytnby82S0RpTjhkUXFWMW53Y0FHazZEVmEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ5ODAxMTQ1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUY5RENGNDY2OEE5Njc5QTI2QzlGOUZCQjU1RDZCNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYwOTg3MTE5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0OTgwMTE0NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUyQjlFNDYzNzEwRUY4OUNERTIxQ0YyQkM5RUE5MjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDk4NzEyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDk4MDExNDUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MTMzQkEyNzE5N0NDMEExRUMyMEFDQUUyREY1QjgzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjA5ODcxMjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ilk2MTRSOERKIiwibWUiOnsiaWQiOiI5MjM0OTgwMTE0NTE6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqVwi8J2Zj8yk8J2Zneqvrdi5XCIg6q+t8JOGqeqvrfCdl5TwnZeh8J2XlPCdl6zwnZeU8J2Xp+KAjvCThqoiLCJsaWQiOiIxMjA5NTk4NTE4NjQxODA6MTVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMk9tNDBHRU4rUDJzY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwSVdJQW1kNDMrZy9tc0tnVVh5VDNHRElDQWJaRE81RGZwZm9aeEVpSUh3PSIsImFjY291bnRTaWduYXR1cmUiOiJRVGFCbDBZZlUrU2t4Z0NjUmMzZnIwVGROR0lFamY3WHovSFk4d0M0VzRhSm40eTFOa2lINERzZmNXK2NMQ0VyWllUTHpLYTJwZlFYUllZV3ltUGpDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUGUvcHdRbUZVaHFOaHlia3lVbk9zVVFLS1pHSUxnTGNIZnpQM0d1NjN3WEV5RklDTWd5cjhqaFE3VWd6VDd3VURtWllvdWt1ZkVWQkx3OUFZWmlzQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0OTgwMTE0NTE6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYVNGaUFKbmVOL29QNXJDb0ZGOGs5eGd5QWdHMlF6dVEzNlg2R2NSSWlCOCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwOTg3MTE3LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRy90In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
