
const names = [];

function printBadges(names) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names
}

var i = 0;

function tailsNeverFails() {
  while (Math.random() >= 0.5){
    i++;
  }
  console.log(`You got ${i} tails in a row!`)
}
