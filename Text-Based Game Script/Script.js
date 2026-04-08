
let gamePromt
let inventory = [];
let health = 100;
let KitchenPrompt;
let basementPrompt;
let livingRoomPrompt;
let bedroomPrompt;

function startGame() {
    let gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
    
    while (gamePromt || health > 0) {
        if (gamePromt === "Kitchen") {
            enterKitchen();
        } else if (gamePromt === "Living Room") {
            enterLivingRoom();
        } else if (gamePromt === "Bedroom") {
            enterBedroom();
        } else if (gamePromt === "Basement") {
            enterBasement();
        } else {
            gamePromt = prompt("Invalid room. Please choose Kitchen, Living Room, Bedroom, or Basement.");
        }
         if (health <= 0) {
        alert("Game Over! You have died.")  
        break;
        }
        
    }
    
}

startGame();

function enterBasement() {
       basementPrompt = prompt("You have entered the basement. You see a furnace, a water heater, and a creepy old doll, do you want to pick up the doll, it looks kinda weird though? (Yes or No)");
         if (basementPrompt === "Yes") {
            basementPrompt = prompt("You pick up the doll, it looks weird, the eyes seem to be following you, some of its limbs are missing, and part of its hair is pulled out, do you want to put it in your pocket? (Yes or No)")
         }
            if (basementPrompt === "Yes") {
                inventory.push("Creepy Old Doll");
                basementPrompt = prompt("You put the creepy old doll in your pocket. It feels cold to the touch, You look around for a bit, seeing an old vodka bottle that's half full, do you want to drink it? (Yes or No)");
                if (basementPrompt === "Yes") {
                    basementPrompt = alert("You take a swig of the vodka, it burns your throat, you feel a bit dizzy, as you stumble out of the basement, going to the main area. The bottle might or might not be poisoned. You just lost 75 health.");
                    health -= 75;
                    if (health >= 0) {
                        console.log(`Your current health is ${health}. You stumble out of the basement, going to the main area.`);
                        gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
                        return;
                    }
                }
            }
            else if (basementPrompt === "No") {
                basementPrompt = prompt("You decide not to pick up the creepy old doll. You feel a sense of relief, you eventually leave the basement, going to the main area.");
                gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
                return;
            }
}

function enterKitchen() {
    KitchenPrompt = prompt("You have entered the kitchen. You see a fridge, a stove, and a sink, do you want to open the fridge? (Yes or No)");
    if (KitchenPrompt === "Yes") {
        KitchenPrompt = prompt("You open the fridge, you see a half-eaten sandwich, a carton of milk that's past its expiration date, and a mysterious glowing green liquid in a jar. Do you want to drink the green liquid? (Yes or No)");
        if (KitchenPrompt === "Yes") {
            KitchenPrompt = prompt("You take a sip of the green liquid, it tastes like a mix of mint and gasoline, you feel a surge of energy, but also a bit of nausea. You just lost 50 health and your heart starts throbbing. You lost 25 health, you shouldn't drink weird liquids dumbass, why was it there anyways, you get bored, do you want to go to the living room? (Yes or No)");
            health -= 50;
            health -= 25;
            if (health >= 0){
                console.log(`Your current health is ${health}. You stumble out of the kitchen, going to the main area.`);
                gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
                return;
            }
            if(KitchenPrompt === "Yes"){
                livingRoomPrompt = alert("You have entered the living room. You see a couch, a television, you stumble to the television turning it on as the news plays, there's been a car crash on the street to the grocery store, the on your wife should be on. The camera pans to the cars involved in the crash it's your wife as you see her limp body being take out on a strecher, your heart starts throbbing faster, pain from the mysteriouse liquid and this terrible news hitting you like a truck as you have a heart attack dying almost instantly, you lose 100 health.");
                health -= 100;
            }
        }
        else if (KitchenPrompt === "No") {
            KitchenPrompt = alert("You decide not to drink the green liquid. You feel a sense of relief, you eventually leave the kitchen, going to the main area.");
            gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
            return;
        }
    }
        else if (KitchenPrompt === "No") {
            KitchenPrompt = alert("You decide not to open the fridge. You feel a sense of relief, you eventually leave the kitchen, going to the main area.");
            gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
            return;
        }
       
}

function enterLivingRoom() {
    livingRoomPrompt = prompt("You have entered the living room. You see a couch, a television, and a bookshelf, do you want to sit on the couch, or pick up a book? (Couch or Book)");
    if (livingRoomPrompt === "Couch") {
        livingRoomPrompt = prompt("You sit on the couch, it's surprisingly comfortable, you take a moment to relax, as you look around the room, you see a family photo on the wall, you look at it and see your wife and child in the photo, you feel a sense of happiness and contentment. Your kids are at school right now, you should go pick them up, do you want to go to the kitchen to get your car keys? (Yes or No)");
        if (livingRoomPrompt === "Yes") {
          livingRoomPrompt = prompt("You go to the kitchen to get your car keys. As you pick them up, you check the time on your watch, see that you still have a few hours, so you walk out side to the shed in the backyard, you've been working on a treehouse for the kids, and your almost finished, do you want to enter the shed, to continue working on it? (Yes or No)");
          if (livingRoomPrompt === "Yes") {
            livingRoomPrompt = prompt("You enter the shed, you see some tools, wood planks, and a half-finished treehouse. You decide to work on the treehouse for a bit, as you hammer some nails into the wood, you accidentally hit your thumb with the hammer, you feel a sharp pain shoot through your hand, you just lost 10 health. Do you want to continue working on the treehouse? (Yes or No)");
            health -= 10;
            if (health >= 0) {
                gamePromt = alert(`Your current health is ${health}. You decide to continue working on the treehouse for a bit longer, as you finish up the last few nails, you step back to admire your work, it's not perfect but it's good enough for your kids to play in. You eventually leave the shed, going to the main area.`);
                gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
                return;
            }
        }
        else if (livingRoomPrompt === "No") {
            livingRoomPrompt = alert("You decide not to go to the kitchen to get your car keys. You sit on the couch for a while eventually falling asleep, you wake up two hours larter, you're late to pick them up as you rush out of the house picking up your car keys but you stumble at the stairs hitting your head losing 20 health, you should proabably check that later, as you head to the school picking them up and bringing them back home, going to the main area.");
            health -= 20;
             gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
             return;
        }
    }
        else if (livingRoomPrompt === "Book") {
            livingRoomPrompt = prompt("You pick up a book from the bookshelf, it's an old dusty book with a leather cover, you open it and see that it's a diary, you start reading it and realize that it's your diary from when you were a kid, you read through some of the entries and reminisce about your childhood, you feel a sense of nostalgia and warmth, putting the book in you pocket. You eventually leave the living room, going to the main area.");
            inventory.push("Old Diary");
            gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
                return;
        }
}
}
function enterBedroom() {
    bedroomPrompt = prompt("You have entered the bedroom. You see a bed, a dresser, and a closet, do you want to lie down on the bed, or open the closet? (Bed or Closet)");
    if (bedroomPrompt === "Bed)"){
        bedroomPrompt = prompt("You lie down on the bed turning over, seeing something under your wife's pillow, you reach under the pillow grabbing a .... dildo???? You feel flustered remebering what happened last night, you stuble out of the bed falling over hitting your leg, losing 15 health, you should probably check that later, as you eventually leave the bedroom, going to the main area.");
        health -= 15;
        gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
        return;
    }
    else if (bedroomPrompt === "Closet") {
        bedroomPrompt = prompt("You open the closet, you see some old clothes, a suitcase, and a box of old toys, you decide to look through the box of old toys, as you dig through it, you find an old action figure that you used to play with as a kid, you feel a sense of nostalgia and happiness, you put the action figure in your pocket. You eventually leave the bedroom, going to the main area.");
        inventory.push("Old Action Figure");
        gamePromt = prompt("Which room do you want to enter? (Kitchen, Living Room, Bedroom, Basement)");
        return;
    }
}

