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

    const volume = options.getInteger("valor");
    const queue = await client.distube.getQueue(guildId);

    if (volume < 0 || volume > 100) {
      await interaction.reply("Valor inválido! Escolha um inteiro entre 0 e 100.");

    } else if (queue.volume > volume) {
      queue.setVolume(volume);
      await interaction.reply(`Volume diminuído para ${volume}%.`);

    } else {
      queue.setVolume(volume);
      await interaction.reply(`Volume aumentado para ${volume}%.`);
    }
  },
};