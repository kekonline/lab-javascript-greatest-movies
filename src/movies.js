// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let director = moviesArray.map((filter) => {
    // console.log(filter.director);
    return filter.director;
  });

  //    console.log(moviesArray)

  director = director.sort((a, b) => {
    if (a.name === b.name) {
      return -1;
    } else {
      return 1;
    }
  });

  //console.log(director)

  return director;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let counter = 0;
  let director = moviesArray.filter((filter) => {
    if (
      filter.director === "Steven Spielberg" &&
      filter.genre.includes("Drama")
    ) {
      counter++;
      return 1;
    } else {
      return 0;
    }
  });

  // console.log(moviesArray);
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  //console.log(moviesArray)
  //console.log(moviesArray)
  if (moviesArray.length === 0) {
    return 0;
  }

  let avgscore = moviesArray.reduce((acc, elem) => {
    if (elem.score === undefined) {
      return acc;
    } else {
      return acc + elem.score;
    }
  }, 0);

  //console.log((avgscore / moviesArray.length).toFixed(2));

  return parseFloat((avgscore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let drama = moviesArray.filter((filter) => {
    if (filter.genre.includes("Drama")) {
      return 1;
    } else {
      return 0;
    }
  });

  return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderTit = [...moviesArray];

  orderTit = orderTit.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year)
      if (a.title > b.title) {
        // esto se puede hacer mejor con el locale comapare
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
  });

  return orderTit;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let orderABC = [...moviesArray];

  orderABC = orderABC.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  //console.log(orderABC)

  orderABC = orderABC.map((eachele) => {
    //   console.log(eachele.title)

    return eachele.title;
  });

  return orderABC.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let cloneArr = JSON.parse(JSON.stringify(moviesArray));

  cloneArr.map((getmins) => {
    let inOfH = getmins.duration.indexOf("h");
    let inOfM = getmins.duration.indexOf(" ");

    inOfH = parseInt(getmins.duration.slice(0, inOfH));
    inOfM = parseInt(getmins.duration.slice(inOfM, -3));

    //console.log(getmins.duration)

    if (inOfM) {
      // console.log(inOfM)

      getmins.duration = inOfH * 60 + inOfM;

      // console.log(getmins)

      return getmins;
    } else {
      //  console.log((nOfH* 60))

      getmins.duration = inOfH * 60;

      return getmins.duration;
    }
  });

  //console.log(minConverter);
  return cloneArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
 
 if(moviesArray.length === 0){
    return null;
 }
 
 
    let cloneArr = JSON.parse(JSON.stringify(moviesArray));
let keepDates =[]
for(let i =1800; i < new Date().getFullYear();i++){
  //  console.log(cloneArr);
  keepDates[i] = moviesArray.filter((eachYear) => {
  
if(eachYear.year === i && eachYear.year!== undefined){

 //  console.log(keepDates)

      return eachYear;
  }
  
  });

}

let avgArr = []

for(let i =1800; i < new Date().getFullYear();i++){

avgArr[i] = scoresAverage(keepDates[i])



}


let maxscore = 0
let bestyear =0

for(let i =1800; i < new Date().getFullYear();i++){

if(avgArr[i] > maxscore){
    bestyear =i
    maxscore=avgArr[i]
    console.log(avgArr[i])
}



}









 console.log("The best year was " + bestyear +" with an average score of " + maxscore);
return "The best year was " + bestyear +" with an average score of " + maxscore;
}
