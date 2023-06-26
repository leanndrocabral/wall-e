const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('resume')
      .setDescription('Retoma a música que foi pausada.'),

  async execute(interaction) {
    try {
      const {client, guildId} = interaction;

      await client.distube.resume(guildId);
      await interaction.reply('A música foi retomada.');
    } catch (error) {
      await interaction.reply('Não há nenhuma música para ser retomada.');
    }
  },
};
