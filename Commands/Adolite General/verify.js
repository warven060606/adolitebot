/* › Commands / Rank.js ————————————————————————————————————————————————————————

   — Rank un membre sur le site.

     ヽ( •_•)O´¯`°.¸.·´¯`Q(^o^ )`                                              */

// ██████ Integrations █████████████████████████████████████████████████████████

// —— Importation de la base des commandes
const Command = require("../Command"),
    mysql = require('mysql'),
    { MessageEmbed } = require("discord.js");


// ██████ | ███████████████████████████████████████████████████████████ | ██████

// —— Créé & exporte une classe
class Verify extends Command {

    constructor(client) {
        super(client, {
            name: "verify",
            description: "Permet de relier son compte discord à celui d'Adolite",
            usage: "verify",
            args: false,
            category: "General",
            cooldown: 5000,
            aliases: false,
            permLevel: 0,
            permission: "VIEW_CHANNEL",
            allowDMs: false
        });
    }

    async run(message, args) {

        // —— Database connection
       

}

module.exports = Verify;
