
const names = [];

function printBadges([]) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]} You are employee #${i}.`)
  }
  return names
}
