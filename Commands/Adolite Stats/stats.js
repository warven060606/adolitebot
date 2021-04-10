
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

        console.log(`[Adolite]:${message.author.tag}` + ` Utilisation => ` + `stats`);

        const messageuser = args.join(" ");
        
        const SendMessage = await message.channel.send('🔄 Recherche du compte en cours ...');
        let search = args[0] ? message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.displayName.toLowerCase() === args[0].toLowerCase()) || client.users.cache.find(u => u.username.toLowerCase() === args[0].toLowerCase()) || message.mentions.users.first() || args[0] : message.author;

        let data = [];
        let userstats = [];
        let error = "";
        try {
          const search = args[0] ? message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(user => user.displayName.toLowerCase() === args[0].toLowerCase()) || client.users.cache.find(u => u.username.toLowerCase() === args[0].toLowerCase()) || message.mentions.users.first() || args[0] : message.author;

          const res = await fetch(`https://adolite.fr/api/api.php?id=${search.id ? search.id : search}`);
          data = await res.json();

          if(data && data.code === "200"){
            const res2 = await fetch(`https://adolite.fr/api/api.php?id=${data.id}`);
            let userstats = await res2.json();

            let OnlineTime = Math.round(userstats.OnlineTime / 3600);
            
            const Embed = new MessageEmbed().setColor("RANDOM")
            .setDescription(`Statistique du compte de ${data.username}`)
            .setFooter(`Demande effectuée par ${message.author.username}`, message.author.displayAvatarURL())
            .setTimestamp()
            .setThumbnail(`https://www.Adolite.online/dcr/habbo-imaging/avatarimage.php?figure=${data.look}&direction=2&action=std,crr=47`)
            .addField(`Pseudo`, data.username, true)
            .addField(`Description`, !data.motto || data.motto.length < 1 ? "Aucune" : decodeURIComponent(escape(data.motto)), true)
            .addField(`Points Gamer`, data.game_points < 1 ? "Aucun" : data.game_points, true)
            .addField(`Crédits`, data.credits, true)
            .addField(`Diamants`, data.vip_points, true)
            .addField(`Meilleur Mazo`, data.mazoscore, true)
            .addField(`Temps de connexion`, `${OnlineTime} ${OnlineTime > 1 ? "heures": "heure"}`, true)
            .addField(`Statuts`, data.online === "0" ? "Hors ligne" : "En ligne", true)
            .addField(`Date de création`, "le " + data.account_created, true)
            .addField(`Dernière connexion`, data.online === "0" ? `Il y a ${data.last_online}` : "Maintenant", true)
            return SendMessage.edit(" ", Embed);
          }
          return SendMessage.edit(data ? data.message : ":x: Une erreur est survenue, réessayez !");

        } catch (e) {
          error = e.toString();
          console.log("erreur: " + error);
        }

        

                

    }
}

module.exports = Stats;