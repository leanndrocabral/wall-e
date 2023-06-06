const { EmbedBuilder } = require("discord.js");

class Embeds {
  beeImage = "https://th.bing.com/th/id/OIP.PzG7httR7rdbkBzHIkEF2QAAAA?pid=ImgDet&rs=1";

  songInfo(name, thumbnail, url, views, formattedDuration) {

    return new EmbedBuilder()
      .setColor(0xED4245)
      .setDescription(name)
      .setThumbnail(thumbnail)
      .addFields(
        { name: " ", value: url },
        { name: "**Views:**", value: views.toString(), inline: true },
        { name: "**Duração:**", value: formattedDuration, inline: true }
      )
      .setFooter({ text: "Bee", iconURL: this.beeImage });
  }

  queueInfo(name, thumbnail, url, queue, index = 0) {
    const playlist = queue.map((song, id) =>
      `**${id + index + 1}.** [ ${song.name} ] - \`${song.formattedDuration}\``
    ).join("\n");

    return new EmbedBuilder()
      .setColor(0xED4245)
      .setTitle("Tocando Agora:")
      .setDescription(name)
      .setThumbnail(thumbnail)
      .addFields({ name: " ", value: url })
      .addFields({ name: " ", value: " " })
      .addFields({ name: " ", value: " " })
      .addFields({ name: " ", value: playlist })
      .setFooter({ text: "Bee", iconURL: this.beeImage });
  }

  miscellaneous(gif, description) {

    return new EmbedBuilder()
      .setColor(0xFEE75C)
      .setDescription(description)
      .setImage(gif)
      .setFooter({ text: "Bee", iconURL: this.beeImage });
  }
}

const embedGen = new Embeds();

module.exports = embedGen;