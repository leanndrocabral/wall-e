const { SlashCommandBuilder } = require("discord.js");
const embedGen = require("../../utils/embeds");
const instace = require("../../services/api");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dance")
    .setDescription("Dance sozinho ou com outro usuário.")
    .addMentionableOption(options =>
      options
        .setName("usuário")
        .setDescription("Usuário que irá dançar com você.")
    ),

  async execute(interaction) {
    await interaction.deferReply();

    const { member, options } = interaction;
    const user = options.getMentionable("usuário");

    if (user) {
      const description = `${member} Está dançando com ${user}`

      const randomId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      const { data } = await instace.get(`/dance/${randomId}/false`);

      const embed = embedGen.miscellaneous(data.gif_url, description);
      await interaction.editReply({ embeds: [embed] });

    } else {
      const description = `${member} Está dançando`

      const randomId = Math.round(Math.random() * (20 - 10 + 1)) + 10;
      const { data } = await instace.get(`/dance/${randomId}/true`);

      const embed = embedGen.miscellaneous(data.gif_url, description);
      await interaction.editReply({ embeds: [embed] });
    }
  },
};