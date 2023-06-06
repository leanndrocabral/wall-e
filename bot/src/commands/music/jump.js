const { SlashCommandBuilder } = require("discord.js");
const embedGen = require("../../utils/embeds");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("jump")
    .setDescription("Pula para a música na posição escolhida.")
    .addIntegerOption(options =>
      options
        .setName("posição")
        .setDescription("Posição da música.")
        .setRequired(true)
    ),

  async execute(interaction) {
    try {
      const { client, guildId, options } = interaction;
      const position = options.getInteger("posição");

      const jumpedSong = await client.distube.getQueue(guildId).jump(position - 1);
      const { name, thumbnail, url, views, formattedDuration } = jumpedSong;

      const embed = embedGen.songInfo(name, thumbnail, url, views, formattedDuration);

      await interaction.reply({
        content: `Pulando para a música de posição ${position}...`,
        embeds: [embed]
      });

    } catch (error) {
      await interaction.reply("Nenhuma música encontrada nessa posição.");
    }
  },
};