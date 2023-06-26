const {SlashCommandBuilder} = require('discord.js');
const embedGen = require('../../utils/embeds');
const instance = require('../../services/api');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('punch')
      .setDescription('Dê um soco em alguém.')
      .addMentionableOption((options) =>
        options
            .setName('usuário')
            .setDescription('Usuário que receberá o soco.')
            .setRequired(true),
      ),

  async execute(interaction) {
    await interaction.deferReply();

    const {member, options} = interaction;
    const user = options.getMentionable('usuário');

    const description = `${member} Deu um soco em ${user}`;

    const randomId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const {data} = await instance.gifs.get(`/punch/${randomId}`);

    const embed = embedGen.miscellaneous(data.gif_url, description);
    await interaction.reply({embeds: [embed]});
  },
};
