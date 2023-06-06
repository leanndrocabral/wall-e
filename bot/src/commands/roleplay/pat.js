const { SlashCommandBuilder } = require("discord.js");
const embedGen = require("../../utils/embeds");
const instace = require("../../services/api");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pat")
    .setDescription("Faça carinho em alguém.")
    .addMentionableOption(options =>
      options
        .setName("usuário")
        .setDescription("Usuário que será acariciado.")
        .setRequired(true)
    ),

  async execute(interaction) {
    await interaction.deferReply();

    const { member, options } = interaction;
    const user = options.getMentionable("usuário");

    const description = `${member} Fez carinho em ${user}`;

    const randomId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const { data } = await instace.get(`/pat/${randomId}`);

    const embed = embedGen.miscellaneous(data.gif_url, description);
    await interaction.editReply({ embeds: [embed] });
  },
};