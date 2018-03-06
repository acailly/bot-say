
module.exports = function (vorpal) {
  vorpal
    .command('say [words...]')
    .description('Make the bot say something')
    .action(function (args, callback) {
      const str = args.words.join(' ')
      callback(str)
    })
}
