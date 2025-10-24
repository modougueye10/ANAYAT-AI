const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUQ4QXB4QlYwc1FDSDVMSTRaNUFsRlFucUFwVk9GOE1ZeU5pRURSRWRsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclREdmJ1MG1kaUtaRGVwY0l0djRoWGEzaUl3R2dGVzAzWUdNU2Q3ZUszaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTS3hUSDFaK2ExRjZqdHFDU2FMOUZDZ1lGOVc1elBaZUZLMDFIWmNMZGs0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRFZTa0JGN2szM2s2Yyt2eWNSNlZST3FacmFBa25qT1hPYVlnQlB6bzJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNalVRK2hZa0Z0YUpWc0MzQUlUdTRoanlFQ3RRUG9ka1VXVm9xM2Q1V2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc3RGVaN1pSRFRVZG5VaGtoUmlyQnNHVHBxWDJrd2FTTG1tcDFQcXNWMzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9QWmxMbUhpQ3N1RHpTeXVoOTB2VTZFcDBkaE11YUxpUlpla3k0aWRuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmFOYzEreW93REdEcnp0eHRYSjM2SXRWK1ZmaExOOHg4aVR0Yjdqb1NCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE2NkVQZnZQVjh6czdCdE16T1ZMTHg3dG5HdzNzMithUU9KTHdKU0RiUTZsc2tDSkpSN0M1KzYydXNid0Q5QWlySkhyNHdzTkhPS1liRkNiQ1N3UEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiI5VDZsRG4zS0IyZW1ZS3NIbE9TMUhEL3lQVW5kSkQ2aTc4VERkTE1wamo4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQWlAyNlBBRyIsIm1lIjp7ImlkIjoiMjIxNzUyNTEyNDEwOjYxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjkwNjQ2NDc3MzMyNDk6NjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKWEw5T0lHRUs3ZTdjY0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJODI3RVBtSW1zUGpyWjFpUkwrUDJCY2l1M0F6RkVHWVl2SkNESDNNZWtrPSIsImFjY291bnRTaWduYXR1cmUiOiI0SkRhSmVmb0pJRTY3NndkcUdTcXlQd0ZkcEh0ZzJOUGNlV2R3WUltSzF2WGtvLyt1N1BvdStlSUdlMkpsSHpEQ0pRMmFFUHZPMmVaQ2VHekxxaFFBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM3ZqQU1vaXFBTzA5VTFMTHhDeFZ4Q2JwazAvUGNLVEdVZ1p5OThjNWFvWGU5WFZZem5ka1lsR1c0UTB5ZGNnK2tmeVNvM0hsSVBWc1pBRFU5UlU2Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3NTI1MTI0MTA6NjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1BOdXhENWlKckQ0NjJkWWtTL2o5Z1hJcnR3TXhSQm1HTHlRZ3g5ekhwSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxMzA4NDc1LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRkN6In0=",
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
