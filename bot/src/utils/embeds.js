const {EmbedBuilder} = require('discord.js');

class Embeds {
  wallEImage = 'https://avatarfiles.alphacoders.com/197/197092.jpg';

  songInfo(name, thumbnail, url, views, formattedDuration) {
    return new EmbedBuilder()
        .setColor(0xed4245)
        .setDescription(name)
        .setThumbnail(thumbnail)
        .addFields(
            {name: ' ', value: url},
            {name: '**Views:**', value: views.toString(), inline: true},
            {name: '**Duração:**', value: formattedDuration, inline: true},
        )
        .setFooter({text: 'Wall-e', iconURL: this.beeImage});
  }

  queueInfo(name, thumbnail, url, queue, index = 0) {
    const playlist = queue
        .map(
            (song, id) =>
              `**${id + index + 1}.** [ ${song.name} ] - \`${
                song.formattedDuration
              }\``,
        )
        .join('\n');

    return new EmbedBuilder()
        .setColor(0xed4245)
        .setTitle('Tocando Agora:')
        .setDescription(name)
        .setThumbnail(thumbnail)
        .addFields({name: ' ', value: url})
        .addFields({name: ' ', value: ' '})
        .addFields({name: ' ', value: ' '})
        .addFields({name: ' ', value: playlist})
        .setFooter({text: 'Wall-e', iconURL: this.wallEImage});
  }

  miscellaneous(gif, description) {
    return new EmbedBuilder()
        .setColor(0xfee75c)
        .setDescription(description)
        .setImage(gif)
        .setFooter({text: 'Wall-e', iconURL: this.wallEImage});
  }
}

const embedGen = new Embeds();

module.exports = embedGen;
