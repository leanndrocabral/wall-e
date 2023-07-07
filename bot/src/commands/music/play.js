const {SlashCommandBuilder} = require('discord.js');
const embedGen = require('../../utils/embeds');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('play')
      .setDescription('Reproduz música no canal de voz.')
      .addStringOption((options) =>
        options
            .setName('link-ou-nome')
            .setDescription('Link ou nome da música.')
            .setRequired(true),
      ),

  async execute(interaction) {
    try {
      await interaction.deferReply();

      const {channel, member, options, client} = interaction;
      const linkOrName = options.getString('link-ou-nome');

      client.distube.play(member.voice.channel, linkOrName, {
        textChannel: channel,
        member,
      });
      await interaction.editReply('Adicionando...');

      interaction.client.distube.on('addSong', async (queue, song) => {
        const {name, thumbnail, url, views, formattedDuration} = song;
        const embed = embedGen.songInfo(
            name,
            thumbnail,
            url,
            views,
            formattedDuration,
        );
        await interaction.editReply({embeds: [embed]});
      });

      interaction.client.distube.on('addList', async (queue, playlist) => {
        const views = playlist.songs.reduce((acc, cur) => cur.views + acc, 0);
        const {name, thumbnail, url, formattedDuration} = playlist;

        const embed = embedGen.songInfo(
            name,
            thumbnail,
            url,
            views,
            formattedDuration,
        );
        await interaction.editReply({embeds: [embed]});
      });
    } catch (error) {
      await interaction.editReply('Nenhum resultado encontrado.');
    }
  },
};
