
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

let i = 0

function tailsNeverFails() {
  while (maybeTrue()) {
    console.log(`You got 2 tails in a row!`);
  }
}


