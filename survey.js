const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = "";

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  profile += `Super${answer}Rocker loves `; 
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile += `${answer} in South Korea, `; 
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile += `surrounded in the true sound of ${answer}.\n`; 
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile += `Always hunt for ${answer} thorough garbage bins, `; 
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profile += ` and just found ${answer} last night, and almost cried.\n`; 
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile += `A true beiliever of chess, never a glance at ${answer}, `; 
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile += `and one day, hopes ${answer} will conquer the world.\n`; 
              
              rl.write(profile);
              rl.close();
              
            });
          });
        });
      });
    });
  });
});