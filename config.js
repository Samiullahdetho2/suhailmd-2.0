const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_21_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJ2Vm5hK1I5Y2lmemVDTkQ5Y2J2djl1UzdsakdUb1pNV3pJdVV2QW5BdGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1PbWNpWllkVDUtTHVjTHI1dVBKVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTM3NWY2MWItNTRmMy00ZmJlLTg0MDMtN2FkZDZkMzEyODk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDE3LFxuICAgICAgMTY3LFxuICAgICAgMTE5LFxuICAgICAgMjU1LFxuICAgICAgMjI2LFxuICAgICAgNzQsXG4gICAgICAxOTMsXG4gICAgICAxMjQsXG4gICAgICAyMjQsXG4gICAgICA1OCxcbiAgICAgIDE3NyxcbiAgICAgIDEzNyxcbiAgICAgIDk3LFxuICAgICAgMTQ4LFxuICAgICAgODksXG4gICAgICA5NSxcbiAgICAgIDE3NyxcbiAgICAgIDQxLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTEyLFxuICAgICAgMTMyLFxuICAgICAgNCxcbiAgICAgIDQxLFxuICAgICAgMjA1LFxuICAgICAgNTcsXG4gICAgICAxODgsXG4gICAgICAyMixcbiAgICAgIDE4NyxcbiAgICAgIDE1MixcbiAgICAgIDksXG4gICAgICA2OCxcbiAgICAgIDU2LFxuICAgICAgNTksXG4gICAgICAxMTUsXG4gICAgICAxOSxcbiAgICAgIDEwNixcbiAgICAgIDI4LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktUVlNTWEhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDM4NjM4NTY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MzA5NTMxNjc2Njc3OToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcUl5cllIRU5yODJMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImF3T2J2NlVjeC90OG51ZUo1SURlcjI5ZUI2TmZCRHNUdFlUR2J1ZXJNa289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNE4xcEh4ZENPdjJIY3FYVGZicS9vczJwQjNvbkpoY0dpWTQ4RGhMNHhmVDY5eWpPMU9OQUNVeHlQOHhTM3I3WU01aVVaUUhOOXBqc09yVkkrQ3NSQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR0g0eTN3YmU4dGRqQ0N5NFVHVTRPTHFoQi84djJac2ZSTDhxemZHU1FKVXZBQ3pCcy8wOUYrdGMrK0pRRi8xMWJMOFd1L1I2QVhJTFNJR1JNNXM1QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTAzODYzODU2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU4MDI0NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEZk5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURmTi5qc29uIjogIntcImtleURhdGFcIjpcIjNYa2RmNFl1VnhVQVVFcWRCcGdyd2JpYjUrVjIxTEpDajhwRE9qZFNZZTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5MzUwNzk2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDg1MTY1MzY0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
