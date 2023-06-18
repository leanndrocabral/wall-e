const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("volume")
    .setDescription("Aumenta ou diminui o volume do bot.")
    .addIntegerOption(options =>
      options
        .setName("valor")
        .setDescription("Valor do volume a ser definido.")
        .setRequired(true)
    ),

  async execute(interaction) {
    const { client, guildId, options } = interaction;

    const value = options.getInteger("valor");
    const queue = await client.distube.getQueue(guildId);

    if (value < 0 || value > 100) {
      await interaction.reply("Valor inválido! Escolha um inteiro entre 0 e 100.");

    } else if (queue.volume > value) {
      queue.setVolume(value);
      await interaction.reply(`Volume alterado para ${value}%.`);

    } else {
      queue.setVolume(value);
      await interaction.reply(`Volume alterado para ${value}%.`);
    }
  },
};