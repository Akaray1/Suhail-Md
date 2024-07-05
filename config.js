const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_24_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjTHpXc2VqOXhuYzliY0h3aCtDamZ4MlNveVltSTI2MTI5QzFNeEtRa0ZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzU5OTcyMzY2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FGMEMwODcxNEEzQTVBNDdENEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTgyMjc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFtT3ZYTlFXUlVtQTRpRm1WWkJ4cUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGFhYzE5ZjgtYTNmNC00YTc1LTlkMTUtYTg4OGQ3YjJkMjNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgODAsXG4gICAgICAxNzMsXG4gICAgICAxNjksXG4gICAgICAyMTIsXG4gICAgICAxMjAsXG4gICAgICA5OSxcbiAgICAgIDEsXG4gICAgICAxLFxuICAgICAgNjksXG4gICAgICAyNDcsXG4gICAgICAxNzYsXG4gICAgICAyMTEsXG4gICAgICAxMjAsXG4gICAgICAyMDMsXG4gICAgICA5MSxcbiAgICAgIDIwNixcbiAgICAgIDE2NCxcbiAgICAgIDExMyxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxMTUsXG4gICAgICAzLFxuICAgICAgMjM3LFxuICAgICAgMjQ1LFxuICAgICAgMTUzLFxuICAgICAgMTUwLFxuICAgICAgMjM5LFxuICAgICAgNixcbiAgICAgIDIxOCxcbiAgICAgIDQ5LFxuICAgICAgNTMsXG4gICAgICAxNjksXG4gICAgICAxODksXG4gICAgICAyNTIsXG4gICAgICAyNCxcbiAgICAgIDc4LFxuICAgICAgMTEyLFxuICAgICAgMjYsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVJHRUszVFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU5OTcyMzY2MjoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzMDI2NDc2ODIyNjE3OjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFLQeKdpO+4j/CfmI1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOek9qQU1RKzh1ZnRBWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlMyZ2N5T2orQ2g5ZFUxUzQ5RW9aM21zR2NXc0dZdmsvMTl4SFhsR3FWelU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1RGL240dW0vVTMxdUZFSmRubUlTbGFYMnUrVk0yajZZdWJEZzhaUUo0YUNSN3VPa1psK1YyNTJkRHZPcXN2aERLYnpHZmNSSUViZTZxUkh1N0FDalE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1g3Mi9jTHN1OSt0UDNQUkV4eFRvOTlHWFRESERremQ1bGI3d21XVVJSMzVYeVNPSythWVFVOWU3ZW9keGM3a056VlIrUE5SaktraWNVUDRNYTBkaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTk5NzIzNjYyOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTgyMjcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFCTUFBQkJYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUJNQUFCQlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpQldsZkFKeFAzVjQxeGRwSGNhOUNmTE53RVR4Y2tLRWlpRHo5QlJ5RC9NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY0OTgxNDAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2MDQzNzEzNDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
