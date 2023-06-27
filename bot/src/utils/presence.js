class Presence {
  async verifyPresence(command, interaction) {
    const {member, client, guildId} = interaction;

    const memberVoiceChannel = member.voice.channel;
    const clientVoiceChannel = client.distube.voices.get(guildId);

    switch (true) {
      case !memberVoiceChannel:
        await interaction.reply(
            'Você não está em nenhum canal de voz do servidor.',
        );
        break;

      case !clientVoiceChannel && interaction.commandName === 'play':
        await command.execute(interaction);
        break;

      case client.voice.adapters.size < 1:
        await interaction.reply(
            'Eu não estou em nenhum canal de voz do servidor.',
        );
        break;

      case clientVoiceChannel.channelId !== memberVoiceChannel.id:
        await interaction.reply(
            `Não é possível utilizar este comando pois estou em outro canal de voz.`,
        );
        break;

      default:
        await command.execute(interaction);
        break;
    }
  }
}

const presence = new Presence();

module.exports = presence;
