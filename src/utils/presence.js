class Presence {

  async verifyPresence(command, interaction) {
    const { member, client } = interaction;

    const memberVoiceChannel = member.voice.channel;

    if (!memberVoiceChannel) {
      await interaction.reply("Você não está em nenhum canal de voz do servidor.");

    } else if (client.voice.adapters.size < 1) {
      await interaction.reply("Eu não estou em nenhum canal de voz do servidor.");

    }
    else {
      await this.verifyCommands(command, interaction);
    }
  }

  async verifyCommands(command, interaction) {
    const { member, client, guildId } = interaction;

    const queue = client.distube.getQueue(guildId);
    const voiceChannelId = queue?.voiceChannel.id;

    const memberVoiceChannel = member.voice.channel;

    if (!voiceChannelId) {
      await command.execute(interaction);

    } else if (voiceChannelId !== memberVoiceChannel.id) {
      await interaction.reply("Não é possível utilizar este comando pois estou em outro canal de voz.");

    } else {
      await command.execute(interaction);
    }
  }
}

const presence = new Presence();

module.exports = { presence };