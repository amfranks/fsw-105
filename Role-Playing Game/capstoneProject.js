// Goblins and Dragons Role-Playing Game

const readline = require('readline-sync');

console.log('The year is 1985; welcome to the Goblins and Dragons game! ');

const name = readline.question('Please enter your name: ');

let playerHealth = 25;
let enemyHealth = 15;

const awards = ['Healing potion', 'Sword', 'Shield', 'Book of Knowledge'];
const lootDropped = [];
const enemies = ['Goblin', 'Giant', 'Dragon'];
const gameActions = ['walk', 'Print', 'End Game'];

let inventory = []; // This is the player's inventory

function goblinsAndDragons() {

    const strength = Math.floor(Math.random() * (10-1) + 1); // This is the player's attack strength (between 1 and 10)
    const enemy = enemies[Math.floor(Math.random() * enemies.length)]; // This chooses a random enemy
    const enemyStrength = Math.floor(Math.random() * (10-1) + 1); // This is the enemies attack strength (between 1 and 10)

    const options = readline.keyInSelect(gameActions, "Please choose your player's next move. You can enter 'walk', 'Print' (to show stats), or 'End Game'.");

    if (gameActions[options] == 'walk') {

        let index = Math.random();

        if (index <= 0.4) {

            console.log(`Yikes! An enemy: (${enemy}), has arrived!`);

            while (enemyHealth > 0 && playerHealth > 0) {

                const player = readline.question('Enter "Attack" to attack or "Run" to run...');

                if (player == "Attack") {
                    enemyHealth = enemyHealth - strength;
                    console.log(`Your player has dealt ${strength} damage to the ${enemy}!`);
                    playerHealth = playerHealth - enemyStrength;
                    console.log(`The enemy has dealt ${enemyStrength} damage to you in return.`);

                    if (enemyHealth <= 0) {
                        let itemsDropped = Math.random();

                        let inventory = awards[Math.floor(Math.random() * awards.length)];

                        if (itemsDropped) {
                            lootDropped.push(inventory); // This adds dropped loot to the player's inventory
                            playerHealth += 5;
                            console.log(`You have slain your foe. The ${enemy} has dropped: ${lootDropped}, and you have gain 5HP!`);
                        }

                        console.log('Press 2 to check inventory!');

                        goblinsAndDragons();

                    } else if (playerHealth <= 0) {
                        console.log("Sorry; you're dead!");
                    }
                } else if (player == "Run") {
                    const runAway = Math.random();

                    if (runAway < 0.5) {
                        console.log(`The ${enemy} has attacked you with ${enemyStrength} damage!`);
                    } else {
                        console.log('Phew, you escaped!');
                        goblinsAndDragons();
                    }
                }
            }
        } else {
            console.log('Your player is currently walking...');
            goblinsAndDragons();
        }

    } else if (gameActions[options] == "Print") {

        if (lootDropped.length == 0) {
            console.log(`${name} has nothing in inventory.`);
        } else {
            console.log(`${name} has ${playerHealth} life points, and has a ${lootDropped} in their inventory. You win this round!`);
            return playerHealth = 0;
        }
    
    } else if (gameActions[options] == "End Game") {
        console.log('GAME OVER');
        return playerHealth = 0;
    }

}

while (playerHealth > 0) {
    goblinsAndDragons();
}