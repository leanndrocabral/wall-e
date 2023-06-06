const { SlashCommandBuilder } = require("discord.js");
const embedGen = require("../../utils/embeds");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("previous")
    .setDescription("Reproduz a música anterior da fila."),

  async execute(interaction) {
    try {
      const { client, guildId } = interaction;

      const previousSong = await client.distube.previous(guildId);
      const { name, thumbnail, url, views, formattedDuration } = previousSong;

      const embed = embedGen.songInfo(name, thumbnail, url, views, formattedDuration);
      await interaction.reply({ content: "Retornando...", embeds: [embed] });

    } catch (error) {
      await interaction.reply("Não há nenhuma música na fila.");
    }
  },
};