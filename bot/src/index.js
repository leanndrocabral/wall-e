require("dotenv/config");
const fs = require("fs");
const path = require("path");

const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  Events,
  Collection,
  ActivityType,
} = require("discord.js");
const { DisTube } = require("distube");
const { YtDlpPlugin } = require("@distube/yt-dlp");

const presence = require("./utils/presence");
const embedGen = require("./utils/embeds");

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const COOKIE = process.env.YT_COOKIE;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
  ]
});

client.distube = new DisTube(client, {
  nsfw: true,
  leaveOnEmpty: true,
  youtubeCookie: COOKIE,
  plugins: [new YtDlpPlugin()],
}).setMaxListeners(5);

const commands = [];
client.commands = new Collection();

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {

  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

  for (const file of commandFiles) {

    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
      commands.push(command.data.toJSON());
      client.commands.set(command.data.name, command);
    }
  }
}

(async () => {
  try {
    const rest = new REST({ version: "10" }).setToken(TOKEN);

    await rest.put(Routes.applicationCommands(CLIENT_ID), {
      body: commands,
    });
  } catch (error) {
    console.error(error);
  }
})();

client.on("ready", () => {
  client.user.setActivity({ name: "Tomando um café...", type: ActivityType.Playing });

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const musicCommands = [
    "play",
    "jump",
    "loop",
    "pause",
    "previous",
    "queue",
    "resume",
    "skip",
    "stop",
  ]

  const commandName = interaction.commandName;
  const command = interaction.client.commands.get(commandName);

  try {
    if (musicCommands.includes(commandName)) {
      await presence.verifyPresence(command, interaction);

    } else {
      await command.execute(interaction);
    }
  } catch (error) {
    console.error(error);
  }
});

client.login(TOKEN);

client.distube.on("addSong", async (queue, song) => {
  const { name, thumbnail, url, views, formattedDuration } = song;
  const embed = embedGen.songInfo(name, thumbnail, url, views, formattedDuration);
  queue.textChannel.send({ embeds: [embed] });

}).on("addList", (queue, playlist) => {
  const views = playlist.songs.reduce((acc, cur) => cur.views + acc, 0);
  const { name, thumbnail, url, formattedDuration } = playlist;

  const embed = embedGen.songInfo(name, thumbnail, url, views, formattedDuration);
  queue.textChannel.send({ embeds: [embed] });
});