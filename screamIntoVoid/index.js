//requires the dotenv file where token is located and configures it.
const dotenv = require("dotenv").config();
//requires the discord.js module so we can use discord.js methods and modules
const Discord = require("discord.js");
//creates a new discord client
const client = new Discord.Client();

//when the client is ready, run this code
//this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

//login to your discord with your apps token
client.login(process.env.TOKEN);
