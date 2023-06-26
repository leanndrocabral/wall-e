const {SlashCommandBuilder} = require('discord.js');
const embedGen = require('../../utils/embeds');
const instance = require('../../services/api');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('blush')
      .setDescription('Mostre que está envergonhado.'),

  async execute(interaction) {
    await interaction.deferReply();

    const {member} = interaction;

    const description = `${member} Está envergonhado`;

    const randomId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const {data} = await instance.gifs.get(`/blush/${randomId}`);

    const embed = embedGen.miscellaneous(data.gif_url, description);
    await interaction.editReply({embeds: [embed]});
  },
};
