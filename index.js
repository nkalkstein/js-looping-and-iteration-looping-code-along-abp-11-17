
const names = [];

function printBadges(names) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}

function tailsNeverFails() {
  return Math.random() >= 0.5;
}

while (tailsNeverFails()) {
  console.log(`You got ${i} tails in a row!`)
}

while (countdown > 0) {
  console.log(--countdown);
}