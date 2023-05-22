const embedGen = require("./embeds");

class Pagination {

  async queuePagination(interaction, message, queue) {
    const { client } = interaction;
    const { name, thumbnail, url } = queue[0];

    const collectorFilter = (reaction, user) => {
      return ["⏪", "⏩"].includes(reaction.emoji.name) && user.id === interaction.user.id;
    };
    const collected = message.createReactionCollector({ filter: collectorFilter });

    collected.on("collect", async (reaction) => {
      const take = client.guilds.cache.get("take");

      if (reaction.emoji.name === "⏩") {
        const index = client.guilds.cache.set("take", take + 5).get("take");
        const page = queue.slice(index, index + 5);

        if (page.length > 0) {
          const embed = embedGen.queueInfo(name, thumbnail, url, page, index);
          await interaction.editReply({ embeds: [embed] });
        } else {
          client.guilds.cache.set("take", take - 5);
        }
      } else {
        const index = client.guilds.cache.set("take", take - 5).get("take");
        const page = queue.slice(take - 5, take);

        if (page.length > 0) {
          const embed = embedGen.queueInfo(name, thumbnail, url, page, index);
          await interaction.editReply({ embeds: [embed] });
        } else {
          client.guilds.cache.set("take", take + 5);
        }
      }
    });
  }
}

const pagination = new Pagination();

module.exports = pagination;