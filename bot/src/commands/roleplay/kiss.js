const {SlashCommandBuilder} = require('discord.js');
const embedGen = require('../../utils/embeds');
const instance = require('../../services/api');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('kiss')
      .setDescription('Dê um beijo em alguém.')
      .addMentionableOption((options) =>
        options
            .setName('usuário')
            .setDescription('Usuário que você irá beijar.')
            .setRequired(true),
      ),

  async execute(interaction) {
    await interaction.deferReply();

    const {member, options} = interaction;
    const user = options.getMentionable('usuário');

    const description = `${member} Beijou ${user}`;

    const randomId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const {data} = await instance.gifs.get(`/kiss/${randomId}`);

    const embed = embedGen.miscellaneous(data.gif_url, description);
    await interaction.editReply({embeds: [embed]});
  },
};
