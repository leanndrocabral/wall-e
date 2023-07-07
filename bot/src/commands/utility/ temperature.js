const {SlashCommandBuilder, codeBlock} = require('discord.js');
const instance = require('../../services/api');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('temperature')
      .setDescription('Veja a temperatura atual.')
      .addStringOption((options) =>
        options
            .setName('cidade')
            .setDescription('Nome da cidade que terá a temperatura exibida.')
            .setRequired(true),
      ),

  async execute(interaction) {
    try {
      await interaction.deferReply();

      const city = interaction.options.getString('cidade');
      const search = city.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      const {data} = await instance.temperature.get(
          `/current.json?key=${process.env.TEMPERATURE_KEY}&q=${search}`,
      );
      const {current, location} = data;
      const codeblock = codeBlock(
          `Atualmente está fazendo ${current.temp_c} °C em ${location.name} - ${location.region}.`,
      );
      await interaction.editReply(codeblock);
    } catch (error) {
      await interaction.editReply('Nenhum cidade foi encontrada.');
    }
  },
};
