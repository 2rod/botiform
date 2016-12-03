
const YOUR_TELEGRAM_BOT_TOKEN = '303931185:AAH3S10_Wewfky47s69v4s5B4aBWTtxtAac';

module.exports = (robot) => {

  var TelegramBot = require('node-telegram-bot-api');

  // replace the value below with the Telegram token you receive from @BotFather
  var token = 'YOUR_TELEGRAM_BOT_TOKEN';

  // Create a bot that uses 'polling' to fetch new updates
  var bot = new TelegramBot(token, { polling: true });

  // Matches "/echo [whatever]"
  bot.onText(/\/echo (.+)/, function (msg, match) {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    var chatId = msg.chat.id;
    var resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });

  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', function (msg) {
    var chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, "Received your message");
  });


  // robot.hear /badger/i, (res) ->
  //   res.send "Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS"
  //
  // robot.respond /open the (.*) doors/i, (res) ->
  //   doorType = res.match[1]
  //   if doorType is "pod bay"
  //     res.reply "I'm afraid I can't let you do that."
  //   else
  //     res.reply "Opening //{doorType} doors"
  //
  // robot.hear /I like pie/i, (res) ->
  //   res.emote "makes a freshly baked pie"
  //
  // lulz = ['lol', 'rofl', 'lmao']
  //
  // robot.respond /lulz/i, (res) ->
  //   res.send res.random lulz
  //
  // robot.topic (res) ->
  //   res.send "//{res.message.text}? That's a Paddlin'"
  //
  //
  // enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
  // leaveReplies = ['Are you still there?', 'Target lost', 'Searching']
  //
  // robot.enter (res) ->
  //   res.send res.random enterReplies
  // robot.leave (res) ->
  //   res.send res.random leaveReplies
  //
  // answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING
  //
  // robot.respond /what is the answer to the ultimate question of life/, (res) ->
  //   unless answer?
  //     res.send "Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again"
  //     return
  //   res.send "//{answer}, but what is the question?"
  //
  // robot.respond /you are a little slow/, (res) ->
  //   setTimeout () ->
  //     res.send "Who you calling 'slow'?"
  //   , 60 * 1000
  //
  // annoyIntervalId = null
  //
  // robot.respond /annoy me/, (res) ->
  //   if annoyIntervalId
  //     res.send "AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH"
  //     return
  //
  //   res.send "Hey, want to hear the most annoying sound in the world?"
  //   annoyIntervalId = setInterval () ->
  //     res.send "AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH"
  //   , 1000
  //
  // robot.respond /unannoy me/, (res) ->
  //   if annoyIntervalId
  //     res.send "GUYS, GUYS, GUYS!"
  //     clearInterval(annoyIntervalId)
  //     annoyIntervalId = null
  //   else
  //     res.send "Not annoying you right now, am I?"
  //
  //
  // robot.router.post '/hubot/chatsecrets/:room', (req, res) ->
  //   room   = req.params.room
  //   data   = JSON.parse req.body.payload
  //   secret = data.secret
  //
  //   robot.messageRoom room, "I have a secret: //{secret}"
  //
  //   res.send 'OK'
  //
  // robot.error (err, res) ->
  //   robot.logger.error "DOES NOT COMPUTE"
  //
  //   if res?
  //     res.reply "DOES NOT COMPUTE"
  //
  // robot.respond /have a soda/i, (res) ->
  //   // Get number of sodas had (coerced to a number).
  //   sodasHad = robot.brain.get('totalSodas') * 1 or 0
  //
  //   if sodasHad > 4
  //     res.reply "I'm too fizzy.."
  //
  //   else
  //     res.reply 'Sure!'
  //
  //     robot.brain.set 'totalSodas', sodasHad+1
  //
  // robot.respond /sleep it off/i, (res) ->
  //   robot.brain.set 'totalSodas', 0
  //   res.reply 'zzzzz'
}
