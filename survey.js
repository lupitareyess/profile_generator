const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is your hometown? ', (answer2) => {
    rl.question('What is your favourite thing to eat? ', (answer3) => {
      rl.question('What is your favourite genre of music? ', (answer4) => {
        rl.question('What is your superpower? ', (answer5) => {
          console.log(`${answer1} grew up in ${answer2} where they loved to eat ${answer3}. They love to listen to ${answer4} and their superpower is ${answer5}`);
          rl.close();
        });
      });
    });
  });
});
