const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("loop")
    .setDescription("Ativa o modo de repetição."),

  async execute(interaction) {
    try {
      const { client, guildId } = interaction;

      const queueMode = client.distube.getQueue(guildId).repeatMode;

      if (queueMode > 0) {
        client.distube.setRepeatMode(guildId, 0);
        await interaction.reply("Modo de repetição desativado.");

      } else {
        client.distube.setRepeatMode(guildId, 2);
        await interaction.reply("Modo de repetição ativado.");
      }

    } catch (error) {
      await interaction.reply("Não há nenhuma música na fila.");
    }
  },
};