require('shelljs/global');
const httpServer = require('./lib/http-server.js');
const hello = require('./lib/hello.js');
const colors = require('colors');
const yargs = require('yargs');

const checkGit = () => {
  if (!which('Git')) {
    echo("对不起，您没有安装git".red);
    exit(1);
  } else {
    echo("您已安装git，可以尽情享用git工具".green);
    exit(1);
  }
}

const argv = yargs
  .alias('n', 'name')
  .alias('v', 'version')
  .usage('Usage: zll [options]')
  .command({
    command: 'configure <key> [value]',
    aliases: ['config', 'cfg'],
    desc: 'Set a config variable',
    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
      echo(`setting ${argv.key} to ${argv.value}`)
    }
  })
  .example('zll hello -n tom', 'say hello to Tom')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2018')
  .command("hello", "say hello to you", () => { }, (argv) => {
    hello(argv.name);
  })
  .command('checkgit', "check git", (yargs) => {
    checkGit();
  })
  .command('server', 'create a local http server', (yargs) => {
    yargs.alias('p', 'port')
      .alias('f', 'filePath')
  }, (argv) => {
    const { port, filePath } = argv;
    httpServer.createServer({ port, filePath });
  })
  .argv;
module.exports = () => {

}