import readline from 'readline';
import chalk from 'chalk';
const optionQuestion = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

const cat = {
    name:'Chicão',
    color:'white',
    //status{
    happiness:10,
    hungry:10,
    stamina:10,
    bathLevel:10,
    //}

    //if bathLevel < 10, the cat is dirty

    //function of play with a ball with me :33 i like that!!
    play: function(){
        if(this.stamina > 0){
            //return this.stamina--, this.happiness++, this.food--;
            console.log(chalk.green('I love play with you s2! prr;3😺😺'))
            return this.stamina--, this.happiness < 10 ? this.happiness++ : 10, this.hungry--, this.bathLevel--;
        };
    },

    //hmmmmm, after this move, im hungry! let's Eat!! :DD
    feed: function(){
        if(this.hungry < 10){
            console.log(chalk.green('nheck...nheck...nehck...'))
            return this.hungry++, this.stamina++;
        }else{
            console.log(chalk.green('Im satisfied! thank you for feed me :3 ^^😺'));
        }
    },

    //Show your affection to me, i like this... meoooww :3 ^^
    affection: function(){
        if(this.happiness <= 10){
            console.log(chalk.green('meow... prrr :3😸😻'));
        };
        return 0;
    },

    //If i still dirty, please give me a bath, but be fast! i don't like bath's.
    bath: function(){
        if(this.bathLevel < 10){
            console.log(chalk.yellow('Oh no bath! nooo🙀🙀🙀'));
            return this.bathLevel++;
        }else{
            console.log(chalk.blue('I dont need a bath!! meowwww ;-;😿😿'));
            return this.happiness > 0 ? this.happiness-- : 0;
        };
    },

};

//this is a function show my status(happiness, my name, food, energy);
function catStatus(){
    console.log(`Status of ${cat.name}\n😸Happiness:${cat.happiness.toFixed(1)}\n🍽️ Hunger:${cat.hungry.toFixed(1)}\n⚡Stamina:${cat.stamina.toFixed(1)}\n🛀Bath Level:${cat.bathLevel.toFixed(1)}`);
};

function startTheGame(){
    optionQuestion.question(`😸What we do?[1]play[2]feed[3]kindness[4]Bath[5]Exit the game😸:`, function(choice){
        if(choice === '1'){
            cat.play();
        }else if(choice === '2'){
            cat.feed();
        }else if(choice === '3'){
            cat.affection();
        }else if(choice === '4'){
            cat.bath();
        }else if(choice === '5'){
            console.log(chalk.yellow('Goodbye! come back here later. meoow :3😸'));
            optionQuestion.close();
            return;
        }else{
            throw new Error(chalk.red('This command is invalid!😾'))
        };

        catStatus();
        startTheGame();
    });
};
console.log(chalk.green('Welcome to tamagouchi cat 1.0 version!😽'));
catStatus();
startTheGame();