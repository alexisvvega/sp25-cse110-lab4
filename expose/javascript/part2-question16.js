let statistics = {
    redCars:21,
    blueCars:45,
    greenCars:12,   
    raceCars:5,
    blackCars:40,   
    rareCars:2
};

//for loop to see if it starts with the letter r or if the value of that property is an odd number
for (let car in statistics) {
    if (car[0] === 'r' || statistics[car] % 2 === 1) {
        console.log(statistics[car]);
    }
} 

