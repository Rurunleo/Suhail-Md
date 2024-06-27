const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ruruleo21@gmail.com"
global.location="Chinhoyi,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263776926048";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_32_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODksXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInUwbjFyaU12a3lHcjZ4QjdVa0dkZ3NNMC9FenBBYjlJSURtaTZ3UEQ1YU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc2OTI2MDQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MTE1ODJENEE0REVGNTQwODVGRkQ2RDlCMUM5ODEyRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk0ODQzNzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzY5MjYwNDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIzNDIzMDE3MDNCQTYyMDJBMzUwODIxQzZCQkM1RUEyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTQ4NDM3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBUlItUDdHWlRpcTdJa21LYWtIN3B3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBkNjhiODgwLTIzOGItNDU5MC05NWNkLWI3MTYyYzI1ZGJjNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAyNTQsXG4gICAgICAxMDMsXG4gICAgICAxODcsXG4gICAgICAyMjMsXG4gICAgICAzMSxcbiAgICAgIDY3LFxuICAgICAgNTMsXG4gICAgICAxNzAsXG4gICAgICAyMDMsXG4gICAgICA4NSxcbiAgICAgIDIyNCxcbiAgICAgIDIzLFxuICAgICAgMTE0LFxuICAgICAgNzksXG4gICAgICAxODIsXG4gICAgICAyMTYsXG4gICAgICAyOCxcbiAgICAgIDEzMyxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICA1NCxcbiAgICAgIDIyMixcbiAgICAgIDE4MSxcbiAgICAgIDI0NSxcbiAgICAgIDM5LFxuICAgICAgMTAwLFxuICAgICAgMTU4LFxuICAgICAgMTAzLFxuICAgICAgMTQwLFxuICAgICAgMzIsXG4gICAgICAyMSxcbiAgICAgIDIzLFxuICAgICAgMTgwLFxuICAgICAgMTQ4LFxuICAgICAgNDIsXG4gICAgICAxNjYsXG4gICAgICA1NSxcbiAgICAgIDE3MCxcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFRNExSNThYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzY5MjYwNDg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzE5ODY3ODk3MDU3MjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQelF5dXNFRU12LzlMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInB1eXQ3RTQvWFRpQTdGWnVmeEltZTVUZTNuZzRpSXMxa3ZTVDl4YVZMMVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTnZ0UzNvY0ZBNTdXdExYbUJyRUtCSExkdGhBenJRVGZPcFAvRzFVYUFTdXdTMDZFbkRNWmZNa01GWmFxL1ZXWjB6S1BTOGI1SVVYRUE3ZHdibHI5QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK2pzYTJpVmNUbmU5YWo0L2k3aG5SeWUzN25VQVJHWldUbW5OMURSQmhDakg5eHhwSVo5dU5uVmc3S3pMZUJkQys4Wk5jNDJ0Z2loVENPR1lyS21rQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc2OTI2MDQ4OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NDg0MzY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTA3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNMDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxWnU4c0F3WTUxSVRSUGdYSEd5TVc2YUVBSjM1UDJUQ1JyRkN3WVFqYktJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTkzNTk4NjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTQ4NDM3MDY0OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ruruleo",
  ownername:process.env.OWNER_NAME|| "Leru",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
