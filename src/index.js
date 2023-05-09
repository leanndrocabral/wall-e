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
  ActivityType
} = require("discord.js");
const { DisTube } = require('distube');
const { YtDlpPlugin } = require("@distube/yt-dlp");

const { presence } = require("./utils/presence");

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const COOKIE = process.env.YT_COOKIE;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
  ],
});

client.distube = new DisTube(client, {
  leaveOnEmpty: true,
  emitNewSongOnly: true,
  nsfw: true,
  youtubeCookie: COOKIE,
  plugins: [new YtDlpPlugin()],
})

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

client.on('ready', () => {
  client.user.setActivity({ name: "Tomando um café...", type: ActivityType.Playing });

  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const musicCommands = [
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

    } else if (commandName === "play") {
      await presence.verifyCommands(command, interaction);

    } else {
      await command.execute(interaction);
    }
  } catch (error) {
    console.error(error);
  }
});

client.login(TOKEN);