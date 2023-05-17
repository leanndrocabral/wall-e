const { SlashCommandBuilder } = require("discord.js");
const embedGen = require("../../utils/embeds");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("Mostra a lista de músicas."),

  async execute(interaction) {
    try {
      const { client, guildId } = interaction;

      const playlist = client.distube.getQueue(guildId);
      const { name, thumbnail, url } = playlist.songs[0];

      const embed = embedGen.playlist(name, thumbnail, url, playlist.songs);
      await interaction.reply({ embeds: [embed] });

    } catch (error) {
      await interaction.reply("Não há nenhuma música na fila.");
    }
  },
};