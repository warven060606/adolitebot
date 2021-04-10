
/* › Commands / Stats.js ————————————————————————————————————————————————————————

   — Servez-vous de ce fichier pour créer une commande.

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
            name        : "stats",
            description : "Affiche les stastistiques détaillées de votre compte.",
            usage       : "stats",
            args        : false,
            category    : "Statistiques",
            cooldown    : 5000,
            aliases     : false,
            permLevel   : 0,
            permission  : "VIEW_CHANNEL",
            allowDMs    : false
        });
    }

    async run(message) {

        const client = this.client;

        console.log(`[Adolite]:${message.author.tag}` + ` Utilisation => ` + `stats`);

      
}

module.exports = Stats;
