const {SlashCommandBuilder} = require('discord.js');
const embedGen = require('../../utils/embeds');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('skip')
      .setDescription('Reproduz a próxima música da fila.'),

  async execute(interaction) {
    try {
      const {client, guildId} = interaction;

      const nextSong = await client.distube.skip(guildId);
      const {name, thumbnail, url, views, formattedDuration} = nextSong;

      const embed = embedGen.songInfo(
          name,
          thumbnail,
          url,
          views,
          formattedDuration,
      );
      await interaction.reply({content: 'Pulando...', embeds: [embed]});
    } catch (error) {
      await interaction.reply('Não há próxima música na fila.');
    }
  },
};
