const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'Embed') {
    const embed = new RichEmbed()
    .setTitle('Приключения Арсения')
    .setColor(0xFF0000)
    .setDescription('Часть 2')
    .setThumbnail("https://media.discordapp.net/attachments/491209089360068611/491934166242557953/afsasfafs.jpg");
    message.delete()
    message.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content === 'Embed1') {
    const embed = new RichEmbed()
    .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("ёпта", "http://i.imgur.com/w1vhFSR.png")
  .setImage("https://images2.domashnyochag.ru/upload/img_cache/cfd/cfd9dd3c5f2f3eb57384d836e0cf7a65_ce_1000x555x0x97_cropped_930x510_fitted_1260x700.jpg")
  .setThumbnail("https://st.kp.yandex.net/images/actor_iphone/iphone360_3098539.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Азазазазаз нахуй",
    "Сукабля")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
  message.delete()
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("Кто мамаша Арсения?")) {
    message.delete()
    message.author.send("Блядина подзаборная ёпта");
  } else
 
  if (message.content.startsWith("Игорь принимает правила и вступает в игру")) {
    message.channel.send("Арсений принимает за правило - сосать мой хуй");
  } else
 
  if (message.content.startsWith("Где Игорь?")) {
    message.delete();
    message.author.send("Да Игорь здесь, Игорю просто нахуй похуй");
  } else
 
  if (message.content.startsWith("Твой еще меньше, пидор")) {
    message.channel.send("Пидор - это твой батя бля")
    message.channel.send("Сука, придушу хуём в захвате если сейчас же не заткнёшь ебало своё, хуепутало бля");
  } else
 
  if (message.content.startsWith("Игорь, не обижай Сенечку")) {
    message.reply("А иначе что бля?")
    message.channel.send("Сенечка нажалуется своей мамаше шлюхе?")
    message.channel.send("Вскроет себе вены?")
    message.channel.send("Расстроится и выебет лошадь?")
    message.author.send("Чморить Арсения - это святое")
    message.author.send("Один раз почморил")
    message.author.send("Второй раз с локтя")
    message.author.send("И Арсений целый месяц в запое");

  } else
 
  if (message.content.startsWith("Кто Арсений по жизни")) {
    message.delete();
    message.author.send("Пидарюга")
    message.author.send("Конеёбище")
    message.author.send("Недостароста")
    message.author.send("Хуепутало")
    message.author.send("Ещё Саней притворяется, но он всё равно Арсений");
  }
});

client.on('message', (message) => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'say') {
    message.channel.send(args.join(' '));
    message.delete();
  }
});

client.login(process.env.BOT_TOKEN);
