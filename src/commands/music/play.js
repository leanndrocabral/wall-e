const { SlashCommandBuilder } = require("discord.js");
const { embedGen } = require("../../utils/embeds");

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

      const [result] = await client.distube.search(linkOrName, { limit: 1 });
      const { name, thumbnail, url, views, formattedDuration } = result;

      client.distube.play(
        member.voice.channel,
        url,
        { textChannel: channel, member: member }
      );

      const embed = embedGen.songInfo(name, thumbnail, url, views, formattedDuration);
      await interaction.reply({ embeds: [embed] });

    } catch (error) {
      await interaction.reply("Nenhum resultado encontrado.");
    }
  },
};