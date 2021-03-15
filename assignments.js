// //Values and variables lecture

// let country = "Syria";
// let continent = 'Asia';
// let population = 34;

// console.log(country, continent, population)

// console.log(typeof null)

// //Data Types lecture assignments

// let isIsland  = false;
// let language;

// console.log(typeof isIsland, typeof population, typeof country, typeof language)

// //Let, const, var lecture assignments
// language = "Arabic";
// console.log(language)

// //Basic operator lecture assignments
// let halfThePopulation = population / 2;
// console.log(++population);
// let finlandPopulation = 6;
// console.log( population > finlandPopulation)
// let avaragePopulation = 33;
// console.log(population < avaragePopulation)
// let description = "Portugal is in Europe, and its 11 million people speak portuguese"
// console.log(description)

// //Strings and Template Literals Lecture
// description = `Portugal is in Europe, and its 11 million speak portugese`

// //Taking decisions: if/else statmenns Lecture
// let populationDifference = avaragePopulation - population;
// let populationDifferenceMore = population - avaragePopulation
// if(population > avaragePopulation){
//     console.log(`Syria's population is ${populationDifferenceMore} greater than the avarage population`)
// }else{
//     console.log(`Syria's population is ${populationDifference} million less than the avarage population` )
// }

// // Type correction & coercion lecture
// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17")  // 617
// console.log("19" - "13" + 17); // 23
// console.log('123' < 57) // false
// console.log(5 + 6 + '4' + 9 - 4 - 2 ) // 1143

// // Equality operators lecture
// //let numNeighbours = Number (prompt("How many neighbour countries does your country have?"))

// // if (numNeighbours === 1){ // Strict comparasion. '==' does type coercion
// //     console.log("Only one neighbour")
// // }else if( numNeighbours >1){
// //     console.log("More than one border")
// // }else{
// //     console.log("No Borders")
// // }

// //Logical operators lecture
// let countrySpeaksEnglish = true;
// let countryPopulationLessThan50Million = true;
// let notAnIsland = false;

// if ( countrySpeaksEnglish && countryPopulationLessThan50Million && !notAnIsland){
//     console.log("it looks a good country and meets all your needs")
// }
// //Switch statment lecture
// let spokenlanguage = 'chi';
// switch (spokenlanguage){
//     case 'arabic':
//         console.log("The 5th native spoken language")
//         break;
//     case 'english':
//         console.log('The 3rd native spoken language')
//         break;
//     case "spanish":
//         console.log("The second spoken language")
//         break;
//     case 'hindi':
//         console.log("the 4th native spoken language")
//         break;
//     default:
//         console.log("Chinese is the most spoken language")
// }
// // The ternery operator lecture
// population >= 33 ? console.log(`${country}'s population is higher than the average`) : console.log(`${country}'s population is below the average`)

//JS FUNAMENTALS PART 2 

function describeCountry (country, population, capitalCity, religion){
    let countrySpecs = `${country} has ${population} inhabitant, its capital is ${capitalCity}, the dominant religion there is ${religion}`
    return countrySpecs
}
let myCountry = describeCountry('Syria', '18 million', 'Damascus', 'egonism')
let madhuCountry = describeCountry('India', '1 Billion', 'New Delhi', 'too many')
let liersCountry = describeCountry('Yazanstan', '1', 'immperfection', 'yazanism')
console.log(myCountry)
console.log(madhuCountry)
console.log(liersCountry)

// Function declaration 

function percentageOfWorld1 (population){
    let worldPopulation =  7900
    return (population * 100)/worldPopulation
}
let chinaPercentage = percentageOfWorld1(1441)
console.log(`China percentage is ${chinaPercentage} of the world population` )

//Function expretion

const percentageOfWorld2 = function (population){
    let worldPopulation = 7900
    return (population / worldPopulation) * 100;
}
let syriaPercentage = percentageOfWorld2(18)
console.log(`Syria percentage is ${syriaPercentage} of the world population` )

// Arrow Function

let percentageOfWorld3 = population =>{
    return (population / 7900) * 100;
}
const chinaPercentage3 = percentageOfWorld3 (1441)
console.log(chinaPercentage3)

// Function calls another fucntion

const describePopulation = function(country, population){
    const chinaPop = percentageOfWorld1(population)

    return `${country} has 1441 inhabitant and it is ${chinaPop} percent of the world population` 
}
const iAmNotSure = describePopulation('China', 1441 )
console.log(iAmNotSure)

// Introduction to Arrays

const populations = [45, 13, 17, 88]
console.log(populations.length === 4 )
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(13), percentageOfWorld1(17), percentageOfWorld1(88)]

console.log(percentages)

//Basic arraies operations (Methods)

const neighbours = ["Lebanon", "Jordan", "Palastine", "Iraq", "Turkey"]

neighbours.push("Utopia")
console.log(neighbours)
neighbours.pop()
console.log(neighbours)
const germany = neighbours.includes("Germany")
console.log(germany)
if(germany){
    console.log("yay!")
}else{
    console.log("Probabley not in the center of europ")
}

console.log(neighbours.indexOf("Iraq"))
neighbours[3] = 'The rebublic of Iraq'
console.log(neighbours)

// Introduction to opjects

const myDreamCountry = {
    name: "New zealand",
    capital: "Wellington",
    language: "English",
    population: 4.9,
    neighbours:["Australia", "Australia2"],
    descripe: function(){
        
    }
}

console.log( `${myDreamCountry.name} has a ${myDreamCountry.population} million ${myDreamCountry.language} speaking people,   ${myDreamCountry.neighbours.length} neighbour countries and a capital called ${myDreamCountry.capital}`)

myDreamCountry.population = 6.9
console.log(myDreamCountry.population)

// Loops intro leccture

for(i=1; i<=50; i++){
    console.log(`Voter number ${i} is voting now!`)
}

//looping through arrays
//const populations = [45, 13, 17, 88]
let percentage2 = []
for(i=0; i< populations.length; i++){
    percentage2.push(percentageOfWorld1(populations[i]))
}
console.log(percentage2)

//Looping backwards and loops in loops
const listOfNeighbours =[
    ["Canada", "Maxico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
]
// Loop and print the countries as indvedual countries
for(neibours = 0; neibours < listOfNeighbours.length; neibours++){
    //console.log(listOfNeighbours[neibours])

    for (neibour = 0; neibour < listOfNeighbours[neibours].length; neibour++){
        console.log(listOfNeighbours[neibours][neibour])
    }
}

//Shit, it is working, I solved is without any help or googeling, I am a geniuse :)

// While loop
let percentage3 = []
let per = 0
while(per< populations.length){
    percentage3.push(percentageOfWorld1(populations[per]))
    per++;
}
console.log(percentage3)