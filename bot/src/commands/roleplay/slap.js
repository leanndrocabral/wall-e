const {SlashCommandBuilder} = require('discord.js');
const embedGen = require('../../utils/embeds');
const instance = require('../../services/api');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('slap')
      .setDescription('Dê um tapa em alguém.')
      .addMentionableOption((options) =>
        options
            .setName('usuário')
            .setDescription('Usuário que receberá o tapa.')
            .setRequired(true),
      ),

  async execute(interaction) {
    await interaction.deferReply();

    const {member, options} = interaction;
    const user = options.getMentionable('usuário');

    const description = `${member} Deu um tapa em ${user}`;

    const randomId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const {data} = await instance.gifs.get(`/slap/${randomId}`);

    const embed = embedGen.miscellaneous(data.gif_url, description);
    await interaction.editReply({embeds: [embed]});
  },
};
