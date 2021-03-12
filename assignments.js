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