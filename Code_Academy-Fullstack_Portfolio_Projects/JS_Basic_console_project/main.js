let AstrologicalSign = ""; //global variable to store astrological signs
let category = ""; //global variable to store the category of astrological sign entered

//function to categorize and validate the initial input, and to generate the corresponding message.
categorizeAstrologicalSign = (input) => {
    
    input = input.toLowerCase(); //converts all signs to lowercase

    //astrological signs are categorized into the classic fire, water, earth, and air categories
    
   if(input === "aries" || input === "leo" || input === "sagittarius") {
    category = "fire";
    return true; //true is returned if the input is valid
   } 
   if(input === "pisces" || input === "cancer" || input === "scorpio") {
    category = "water";
    return true;
   }
   if(input === "taurus" || input === "virgo" || input === "capricorn") {
    category = "earth";
    return true;
   }
   if(input === "aquarius" || input === "gemini" || input === "libra") {
    category = "air";
    return true;
   } else {
       console.log("Check your spelling, please try again")
       return false;
   }
}


//function to generate a random number from a number to another (inclusive on both ends)/
generateRandomNumberRange = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
}


//here, we set three possible formats an astrological horoscope can take
generateHoroscope = () => {
    const value = generateRandomNumberRange(1, 3); //choses which message format the horoscope will take.
    if(value === 1) {
        return message1();
    }
    if(value === 2) {
        return message2();
    }
    if(value === 3) {
        return message3();
    }
}

//object to store possible words based on the category of astrological sign
const words = {
    traits: {
        water: ["imagination", "emotional intelligence", "inventiveness"],
        fire: ["bravery", "confidence", "independent thinking"],
        air: ["social skills", "intelligence", "learning skills"],
        earth: ["practical knowledge", "attention to detail", "consistency"]
    },
    
    goals: ["deepest desires", "dreams", "relationship goals", "greatest passion"]
};

//finds a random trait to add to the horoscope based on the category of the astrological sign and the words object.
generateRandomWords = () => {
    let toReturn = []; //array to be returned. The first value is the trait and the second value is the goal.
    
    //iterating over sub-properties of an object: for..in loop
    //returns when the key matches the category of the astrological sign.
    for(const sign in words.traits) {
        const arraylength = words.traits[sign].length; //length of the sign category's trait array.
        if(sign === category) {
            //adds a random word from the sign category's trait array.
            toReturn.push(words.traits[sign][generateRandomNumberRange(0, (arraylength-1) )]); 
        }
    }

    //pushes random goal to the array

    toReturn.push(words.goals[generateRandomNumberRange(0, (words.goals.length-1))  ] );
    return toReturn;
}


//1st possible message function
const message1 = () => {
    return `This week, you will be guided by your ${generateRandomWords()[0]} to pursue your goals. 
    You will advance your ${generateRandomWords()[1]}.`;
};

//2nd possible message function
const message2 = () => {
    return `Despite your disappointments from last week, this week, your ${generateRandomWords()[0]} will allow you to
    fulfill, at least partially, your ${generateRandomWords()[1]}.`;
};

//3rd possible message function
const message3 = () => {
    return `You are on track, due to your ${generateRandomWords()[0]}, to achieving your 
    ${generateRandomWords()[1]}.`;
};












//          All code below are inputs and outputs to and from the terminal (using the node.js environment).
const prompt = require('prompt-sync')();

console.log("\tHoroscope finder for your astrological sign: ")
console.log("The 12 possible astrological signs are spelled:\n Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius and Pisces.\n\n");

//try inputing as long as the input isn't valid
do {
    AstrologicalSign = prompt('Enter your astrological sign: ');
    
} while (!categorizeAstrologicalSign(AstrologicalSign))
//testing final output
console.log(generateHoroscope() + "\n\n");