
// /* › Commands / Stats.js ————————————————————————————————————————————————————————

//    — Servez-vous de ce fichier pour créer une commande.

//      ヽ( •_•)O´¯`°.¸.·´¯`Q(^o^ )`                                              */

// // ██████ Integrations █████████████████████████████████████████████████████████

// // —— Import base command
 const Command = require("../Command"),
 { MessageEmbed } = require("discord.js"),
 fetch = require('node-fetch');


// // ██████ | ███████████████████████████████████████████████████████████ | ██████

// // —— Créé & exporte une classe
 class Stats extends Command {

     constructor(client) {
         super(client, {
            name        : "stats",
            description : "Affiche les stastistiques détaillées de votre compte.",
            usage       : "{pseudo || @pseudo}",
            args        : true,
            category    : "Statistiques",
            cooldown    : 5000,
            aliases     : false,
            permLevel   : 0,
            permission  : "VIEW_CHANNEL",
            allowDMs    : false
        });
    }

    async run(message, args) {

        const client = this.client;

}

module.exports = Stats;
