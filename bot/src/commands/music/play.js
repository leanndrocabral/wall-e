const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Reproduz música no canal de voz.")
    .addStringOption(options =>
      options
        .setName("link-ou-nome")
        .setDescription("Link ou nome da música.")
        .setRequired(true)
    ),

  async execute(interaction) {
    try {
      const { channel, member, options, client } = interaction;
      const linkOrName = options.getString("link-ou-nome");

      client.distube.play(
        member.voice.channel,
        linkOrName,
        { textChannel: channel, member: member }
      );
      await interaction.reply("Adicionando...");

    } catch (error) {
      await interaction.reply("Nenhum resultado encontrado.");
    }
  },
};