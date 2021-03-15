//requires the dotenv file where token is located and configures it.
const dotenv = require("dotenv").config();
const { prefix, token } = require("./config.json");
//requires the discord.js module so we can use discord.js methods and modules
const Discord = require("discord.js");
//creates a new discord client
const client = new Discord.Client();
const fs = require("fs");

//when the client is ready, run this code
//this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async (message) => {
  // Join the same voice channel of the author of the message
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
    // From a path
    connection.play("./scream1.mp3");
  }
  connection.disconnect();
});

//login to your discord with your apps token
client.login(token);
