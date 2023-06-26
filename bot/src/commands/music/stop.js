const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('stop')
      .setDescription('Para a playlist/música do canal de voz.'),

  async execute(interaction) {
    const {client, guildId} = interaction;

    client.distube.voices.leave(guildId);

    await interaction.reply('Saindo do canal de voz.');
  },
};
