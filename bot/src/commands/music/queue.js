const {SlashCommandBuilder} = require('discord.js');
const embedGen = require('../../utils/embeds');
const pagination = require('../../utils/pagination');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('queue')
      .setDescription('Mostra a lista de músicas.'),

  async execute(interaction) {
    try {
      await interaction.deferReply();
      interaction.client.guilds.cache.set('take', 0);

      const {client, guildId} = interaction;
      const queue = client.distube.getQueue(guildId).songs;

      const {name, thumbnail, url} = queue[0];
      const embed = embedGen.queueInfo(name, thumbnail, url, queue.slice(0, 5));

      const message = await interaction.editReply({
        embeds: [embed],
        fetchReply: true,
      });
      message.react('⏪');
      message.react('⏩');

      pagination.queuePagination(interaction, message, queue);
    } catch (error) {
      await interaction.editReply('Não há nenhuma música na fila.');
    }
  },
};
