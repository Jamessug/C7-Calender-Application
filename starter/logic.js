// logic

// Get the current date and store it as a string in the 'currentDay' variable
const currentDay = new Date().toDateString();

// locates HTML element with the ID "currentDay" and updates its visible text content
document.getElementById("currentDay").textContent = currentDay;

console.log(currentDay);