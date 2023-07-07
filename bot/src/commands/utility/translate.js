const {SlashCommandBuilder, codeBlock, Events} = require('discord.js');
const modalGen = require('../../utils/modals');
const iso639_1 = require('../../utils/ISO');
const {translate} = require('../../services/api');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('translate')
      .setDescription(
          'Traduza textos para uma linguagem específica utilizando o padrão ISO639-1.',
      ),
  async execute(interaction) {
    const modal = modalGen.translate();
    await interaction.showModal(modal);

    interaction.client.on(Events.InteractionCreate, async (interaction) => {
      try {
        if (interaction.isModalSubmit()) {
          await interaction.deferReply();

          const inputs = interaction.fields;

          const fromLanguage = inputs.getTextInputValue('fromLanguageCode');
          const toLanguage = inputs.getTextInputValue('toLanguageCode');
          const textInput = inputs.getTextInputValue('textInput');

          const textTranslate = await translate.post('/translation', {
            text: textInput,
            source: iso639_1[fromLanguage.toLowerCase()],
            target: iso639_1[toLanguage.toLowerCase()],
          });
          const codeblock = codeBlock(textTranslate.data.translation_text);

          await interaction.editReply(codeblock);
        }
      } catch (error) {
        await interaction.editReply(
            'Algo deu errado ou idioma indisponível, tente utilizar o padrão ISO639-1.',
        );
      }
    });
  },
};
