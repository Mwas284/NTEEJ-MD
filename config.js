//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib04vd3pWb1BwMWFNaTBZTGpmeXQvZkkvR0p0cloxZDdKRTQvZ1drOFRIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlcrYmtWN2xad0hZR1lLWFdqeERpNWZiTXlNT01TdDIzcjRQNUM1akZubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRGVSK09ScTArS1NoN2QwNXk2NjdSeVZDeUswUEk5aTduRTdoc0ZDZ0UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaQ3BNSmhpdlBDMDg4M3U4cUpPejFvNDkySUNuSmZld1paRzdoOWUxZFZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndETlBBbm5CWTQzdUxDSXpMc0lZMUZlQzVNV1NRV0MwbUluVngxOWlGbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF1aGU1eDhQQlNIVHZMYXdBK3c5NDg0bmxzaUhHK3g3RVFEQTg5Z1MxejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJFclI5dkhuaFVvczZwMUJwbEJkemlWTkNUYUtqUHlCY1pobVFoMU1VST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQkx5ZmxkMjVlck4rajRKWm1JVTNjZkRFdW1HOUd4Z1FPMnJ2dWFUMmltOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNEMnYwcnBpSlB1eWdGeDNtdjhVS09HeStXS0RObnRTZHFRbm9nbkQ0WkgwVDU1LzJBU1YwUG9BMkxoZ0duenZHTWNWOThjWnVtWXV2NjVqL2hRckR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiJPMW5McHl0OEdtWnFNOU1PYXV2R3UrM1F4Wlh3eDhtRStOVzBnUlJoMzVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJcE9wLUh3Z1NJMjdhdXgtdHBHOFp3IiwicGhvbmVJZCI6ImMxMGJmMGRkLTMyZGQtNDkyNi05YzM5LWM0OGZhNzU1M2FhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOOFBmL05iUGZVU3pGR01CTHlLTlhpYW15a1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU9ORCsvUG90dE1aS0ovOTcwMmhlQXMxcEF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1CRDU1VDFNIiwibWUiOnsiaWQiOiIyNTQ3OTUzNjMzOTY6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJteXN0aWMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDVG9JVUJFTWJsbzdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjUzUEdFRlRnN3k5Ym85N3htZ0RPSmo5YTNMV0EvTzBnc29TekV3TUR6aWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlQyb05RMEpDc0NsbjFKekswWFZ1c2pseGRCaGhYYmNXM0lWV1hML211bEd1c2IxUFIzcmJncUloUUtFeFo5Smcxb0dDeTY0Smd6RlV6L2VQczRjS0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGMW05ZXpWNE5nMVZhdUxNQ0xlTmFWbHAveXFEWmdrblNKc2xNOTM5YUliMFB1RUdtR0pqU0VGcEJxdDk2NkZ2eU01NU45MVpGUm1XYkJzVGM0YXNCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NTM2MzM5NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVkenhoQlU0Tzh2VzZQZThab0F6aVkvV3R5MWdQenRJTEtFc3hNREE4NHAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyNTEwOTF9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "263714497545";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NTEEJ-MD`",
  author: process.env.PACK_AUTHER || "NTEEJ-MD",
  packname: process.env.PACK_NAME || "NTEEJ",
  botname: process.env.BOT_NAME || "NTEEJ-MD",
  ownername: process.env.OWNER_NAME || "Nteej",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
