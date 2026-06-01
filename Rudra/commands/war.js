module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "War in group boxchat",
    commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Listen to your father, kids !");
setTimeout(() => {a({body: "F*ck your mother" })}, 3000);
setTimeout(() => {a({body: "Hello everyone!" })}, 5000);
setTimeout(() => {a({body: "You creative friends come out to listen to your leader chat"})}, 10000);
setTimeout(() => {a({body: "Quick, show your best skills" })}, 15000);
setTimeout(() => {a({body: "Show your true spirit" })}, 20000);
setTimeout(() => {a({body: "Do you guys like friendly competition so much?" })}, 25000);
setTimeout(() => {a({body: "Awesome work, you guys too" })}, 30000);
setTimeout(() => {a({body: "Give your leader a great match" })}, 35000);
setTimeout(() => {a({body: "Hurry up and cheer each other on with me" })}, 40000);
setTimeout(() => {a({body: "Are the eager players getting ready to challenge the leader?" })}, 45000);
setTimeout(() => {a({body: "I respect your effort" })}, 50000);
setTimeout(() => {a({body: "If it's wonderful, then lift your team up" })}, 55000);
setTimeout(() => {a({body: "Your leader amazed you by rapping" })}, 60000);
setTimeout(() => {a({body: "Please enjoy the show" })}, 65000);
setTimeout(() => {a({body: "If it's amazing, support your leader" })}, 70000);
setTimeout(() => {a({body: "Before that, please give me a break for 1 minute" })}, 75000);
setTimeout(() => {a({body: "Please allow me to start" })}, 135000);
setTimeout(() => {a({body: "First of all, I would like to welcome you from top to bottom" })}, 140000);
setTimeout(() => {a({body: "I rhyme from the beat to the melody" })}, 145000);
setTimeout(() => {a({body: "The energy is as big as a stadium filling up the whole city" })}, 150000);
setTimeout(() => {a({body: "I'm sure just a few lines like mine aren't enough to show all the hype" })}, 155000);
setTimeout(() => {a("I'm catching my breath and taking a quick break")} , 160000);
setTimeout(() => {a({body: "Come on team, update the lyrics, let's continue the match" })}, 165000);
setTimeout(() => {a({body: "Thank you for listening to my performance" })}, 170000);
setTimeout(() => {a({body: "Goodbye and see you in the next program" })}, 175000);
setTimeout(() => {a({body: "Good bye 🥺"})} , 180000);
    




  
  }
