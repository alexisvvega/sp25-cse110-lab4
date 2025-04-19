//prints out the time once when executed
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

//prints out the current time every second
setInterval(function() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);

