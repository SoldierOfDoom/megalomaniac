const Discord = require('discord.js');

const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
