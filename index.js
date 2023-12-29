let stopwatch = document.getElementById("Stopwatch");
let Start = document.getElementById("Start");


let id;
function timer() {
   
   
  
   id = setInterval(() => {
      Start.value++; // Increment the value of Start
      stopwatch.value = Start.value;
   }, 100);
   
}


function pause() {
   clearInterval(id);
   
}

function reset() {
   clearInterval(id);
   Start.value = 0;
   stopwatch.value = 0;
  
}