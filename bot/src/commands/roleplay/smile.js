const { SlashCommandBuilder } = require("discord.js");
const embedGen = require("../../utils/embeds");
const instace = require("../../services/api");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("smile")
    .setDescription("Dê um sorriso."),

  async execute(interaction) {
    await interaction.deferReply();

    const { member } = interaction;

    const description = `${member} Está sorrindo`

    const randomId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    const { data } = await instace.get(`/smile/${randomId}`);

    const embed = embedGen.miscellaneous(data.gif_url, description);
    await interaction.editReply({ embeds: [embed] });
  },
};