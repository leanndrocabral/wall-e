class Presence {

  async verifyPresence(command, interaction) {
    const { member, client } = interaction;

    if (!member.voice.channel) {
      await interaction.reply("Você não está em nenhum canal de voz do servidor.");

    } else if (client.voice.adapters.size < 1) {
      await interaction.reply("Eu não está em nenhum canal de voz do servidor.");
    }
    else {
      await command.execute(interaction);
    }
  }
}

const presence = new Presence();

module.exports = { presence };