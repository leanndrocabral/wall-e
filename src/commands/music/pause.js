const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Pausa a música que está sendo reproduzida."),

  async execute(interaction) {
    try {
      const { client, guildId } = interaction;

      await client.distube.pause(guildId);
      await interaction.reply("A música foi pausada.");

    } catch (error) {
      await interaction.reply("Não há nenhuma música em reprodução.");
    }
  },
};