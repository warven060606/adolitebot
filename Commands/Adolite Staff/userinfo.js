
/* › Commands / Userinfo.js ————————————————————————————————————————————————————————

     ヽ( •_•)O´¯`°.¸.·´¯`Q(^o^ )`                                              */

// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
const Command = require("../Command"),
  mysql = require("mysql"),
  { MessageEmbed } = require("discord.js");


// ██████ | ███████████████████████████████████████████████████████████ | ██████

// —— Créé & exporte une classe
class Stats extends Command {

  constructor(client) {
    super(client, {
      name: "userinfo",
      description: "Affiche les stastistiques détaillées d'un compte.",
      usage: "{Pseudo || @Pseudo || ID}",
      exemple: ["Warven"],
      args: true,
      category: "Staff",
      cooldown: 5000,
      aliases: false,
      permLevel: 0,
      permission: "VIEW_CHANNEL",
      allowDMs: false
    });
  }

  async run(message, args) {

    const client = this.client;


}

module.exports = Stats;
