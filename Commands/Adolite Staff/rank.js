/* › Commands / Rank.js ————————————————————————————————————————————————————————

   — Relie son compte discord au Site d'Adolite.fr.

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
            name: "rank",
            description: "Permet de grader une personne sur Adolite Hôtel.",
            usage: "{Pseudo} {Rank}",
            exemple: ["Rayan 1"],
            args: false,
            category: "Staff",
            cooldown: false,
            aliases: false,
            permLevel: 0,
            permission: "VIEW_CHANNEL",
            allowDMs: false
        });
    }

    async run(message, args) {

}

module.exports = Verify;
