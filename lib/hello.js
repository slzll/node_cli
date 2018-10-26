require('shelljs/global');
const colors = require('colors');
module.exports = (name) => {
  const date = new Date();
  const hour = date.getHours();
  let text = "";
  if (hour > 0 && hour < 12) {
    text = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    text = "Good Afternoon"
  } else {
    text = "Good Evening"
  }
  echo(`hello ${name || 'zll'}! ${text}!
当前时间是：${date.toLocaleDateString()} ${date.toLocaleTimeString()}`.green);
  exit(1);
}