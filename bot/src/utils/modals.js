const {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require('discord.js');

class Modals {
  translate() {
    const modal = new ModalBuilder()
        .setCustomId('translateModal')
        .setTitle('Wall-e Translate');

    const from = new TextInputBuilder()
        .setCustomId('fromLanguageCode')
        .setLabel('From')
        .setStyle(TextInputStyle.Short);

    const to = new TextInputBuilder()
        .setCustomId('toLanguageCode')
        .setLabel('To')
        .setStyle(TextInputStyle.Short);

    const text = new TextInputBuilder()
        .setCustomId('textInput')
        .setLabel('Text to be translated')
        .setStyle(TextInputStyle.Paragraph);

    const firstActionRow = new ActionRowBuilder().addComponents(from);
    const secondActionRow = new ActionRowBuilder().addComponents(to);
    const thirdActionRow = new ActionRowBuilder().addComponents(text);

    modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

    return modal;
  }
}

const modalGen = new Modals();

module.exports = modalGen;
