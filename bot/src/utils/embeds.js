const {EmbedBuilder} = require('discord.js');

class Embeds {
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

  temperature({temp_c, temp_f, name, region, country, localtime, condition}) {
    const replaceImage = condition.icon.replace('//', 'https://');
    const localeDate = new Date(localtime).toLocaleString('pt-br');

    const date = localeDate.slice(0, 10);
    const time = localeDate.slice(12, 20);

    return new EmbedBuilder()
        .setColor(0x5865f2)
        .setTitle(`${name} - ${region}, ${country}`)
        .setThumbnail(replaceImage)
        .addFields({name: ' ', value: 'Horário Local:'})
        .addFields({name: 'Data', value: date, inline: true})
        .addFields({name: 'Horário', value: time, inline: true})
        .addFields({name: ' ', value: 'Temperatura:'})
        .addFields({
          name: 'Celcius',
          value: `${Math.round(temp_c)} °C`,
          inline: true,
        })
        .addFields({
          name: 'Fahrenheit ',
          value: `${Math.round(temp_f)} °F`,
          inline: true,
        })
        .setFooter({text: 'Wall-e', iconURL: this.wallEImage});
  }
}

const embedGen = new Embeds();

module.exports = embedGen;
