//Values and variables lecture

let country = "Syria";
let continent = 'Asia';
let population = 18;

console.log(country, continent, population)

console.log(typeof null)

//Data Types lecture assignments

let isIsland  = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language)

//Let, const, var lecture assignments
language = "Arabic";
console.log(language)

//Basic operator lecture assignments
let halfThePopulation = population / 2;
console.log(++population);
let finlandPopulation = 6;
console.log( population > finlandPopulation)
let avaragePopulation = 33;
console.log(population < avaragePopulation)
let description = "Portugal is in Europe, and its 11 million people speak portuguese"
console.log(description)

//Strings and Template Literals Lecture
description = `Portugal is in Europe, and its 11 million speak portugese`

//Taking decisions: if/else statmenns Lecture
let populationDifference = avaragePopulation - population;
let populationDifferenceMore = population - avaragePopulation
if(population > avaragePopulation){
    console.log(`Syria's population is ${populationDifferenceMore} greater than the avarage population`)
}else{
    console.log(`Syria's population is ${populationDifference} million less than the avarage population` )
}