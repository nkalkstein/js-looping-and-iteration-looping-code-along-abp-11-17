
const names = [];

function printBadges(names) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

var i = 0

function tailsNeverFails() {
  while (maybeTrue()) {
    i++
    console.log(`You got ${i} tails in a row!`);
  }
}
