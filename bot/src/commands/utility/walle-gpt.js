const {SlashCommandBuilder, codeBlock} = require('discord.js');
const {encode} = require('gpt-3-encoder');
const instance = require('../../services/api');

module.exports = {
  data: new SlashCommandBuilder()
      .setName('walle-gpt')
      .setDescription('Converse ou faça perguntas para o Wall-e')
      .addStringOption((options) =>
        options
            .setName('texto')
            .setDescription('Texto que o Wall-e irá interpretar e responder.')
            .setRequired(true),
      ),

  async execute(interaction) {
    try {
      await interaction.deferReply();

      const text = interaction.options.getString('texto');
      const encoder = 4097 - encode(text).length;

      const {data} = await instance.gpt.post('/completions', {
        model: 'text-davinci-003',
        prompt: text,
        max_tokens: encoder,
      });

      const codeblock = codeBlock(data.choices.shift().text);
      await interaction.editReply(codeblock);
    } catch (error) {
      await interaction.editReply(
          'Algo deu errado, tente reformular uma pergunta menor.',
      );
    }
  },
};

