// logic

// Display the current day at the top of the calendar when a user opens the planner.

// Get the current date and store it as a string in the 'currentDay' variable
const currentDay = new Date().toDateString();

// locates HTML element with the ID "currentDay" and updates its visible text content
document.getElementById("currentDay").textContent = currentDay;

console.log(currentDay);

// Present timeblocks for standard business hours when the user scrolls down.

  // using bootstrap make the timeblocks in html & css
 
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.'

// Function to color-code time blocks based on past, present, or future

 function colorCodeTimeBlocks() {
  // Get the current time using Day.js
  const currentTime = dayjs();

  // Array of hours from 9 am to 5 pm
  const hours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

  // Loop through each hour
  for (const hour of hours) {
    // Construct the ID for the current time block
    const blockId = `block${hour}`;
    // Get the time associated with the current time block
    const blockTime = dayjs(`2024-01-01 ${hour}`);
    // Get the jQuery object for the current time block
    const $block = $(`#${blockId}`);

    // Compare the current time with the time associated with the block
    if (currentTime.isBefore(blockTime, 'hour')) {
      // If the block's time is in the future, add the 'future' class
      $block.addClass('future');
    } else if (currentTime.isSame(blockTime, 'hour')) {
      // If the block's time is the present, add the 'present' class
      $block.addClass('present');
    } else {
      // If the block's time is in the past, add the 'past' class
      $block.addClass('past');
    }
  }
}

// Call the function to color-code time blocks on page load
colorCodeTimeBlocks();


// Allow a user to enter an event when they click a timeblock.

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page.