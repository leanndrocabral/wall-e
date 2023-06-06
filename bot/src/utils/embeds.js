const { EmbedBuilder } = require("discord.js");

class Embeds {
  wallEImage = "https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

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
      .setFooter({ text: "Wall-e", iconURL: this.wallEImage });
  }

  miscellaneous(gif, description) {

    return new EmbedBuilder()
      .setColor(0xFEE75C)
      .setDescription(description)
      .setImage(gif)
      .setFooter({ text: "Wall-e", iconURL: this.wallEImage });
  }
}

const embedGen = new Embeds();

module.exports = embedGen;