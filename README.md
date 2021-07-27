# React Stopwatch

by [Yinuo Meng](mengyn1999@gmail.com)

## Installation

1. Navigate to [repo](https://github.com/Yinuo-M/stopwatch)
2. Clone locally using `git clone https://github.com/Yinuo-M/stopwatch.git`
3. Move into the stopwatch folder using `cd stopwatch`
4. Install dependencies using `npm install`
5. Run tests using `npm test`
6. Start local development server using `npm start`
7. Navigate to app in [browser](http://localhost:3000)

## Technologies

- Languages: HTML, React, SCSS (with BEM methodology)
- Environment: Create React App
- Testing: Jest and React Testing Library

## Requirements

1. Time display: The current elapsed time is displayed in the 00:00:00:00 (hours, minutes, seconds, centiseconds) format. Time is updated by recursively calling `requestAnimationFrame` and using the timestamp provided by `requestAnimationFrame`'s callback's first argument.

2. Start button: There's a start button that start or continues the timer. Starting the timer hides the start button and shows the pause, lap and reset buttons.

3. Pause button: There's a pause button that pauses the running timer. It only appears after the timer starts running. Pausing the timer hides the pause button and shows the start button.

4. Reset button: There's a reset button that clears the timer to 0. Resetting the timer hides the pause, lap and reset buttons and shows the start button.

## Bonuses

1. Lap button: There's a lap button that writes the time to a table of laps. The table only appears when there are laps recorded. It does not pause the timer. The results are shown on screen and stored in `localStorage`, and the Stopwatch component will retrieve any lap history from `localStorage` when it mounts, so that the laps are still visible if the page is refreshed.

2. Clear lap history button: There's a clear button that clears any lap history. Clearing lap history also hides the table of laps.

3. Make it look good: The timer is fully responsive and has (in my opinion) a cute cyberpunk-themed colour scheme.

4. No bugs or quirky behaviour: This timer uses the timestamp provided by `requestAnimationFrame`'s callback's first argument to track time. Therefore the timer is always accurate and won't be blocked by other tasks performed by the app. For a detailed discussion of why I chose `requestAnimationFrame`, please see below.

## Discussion

I chose to use `requestAnimationFrame` to update the timer because it performs better than `setTimeout` or `setInterval`.

Using `setTimeout` or `setInterval` to repeatedly increment the time by a certain amount of miliseconds is not accurate because JavaScript is single threaded, i.e. JavaScript only has one call stack. So if our code needs to perform other tasks while updating the timer, timer update will be paused until other tasks are finished.

A better solution is to update the timer using the Date object in `setTimeout` or `setInterval`, or using the timestamp provided by `requestAnimationFrame`'s callback's first argument. Neither will be blocked by other tasks because timestamps are up to date irrespective of what code is running. Of the two, requestAnimationFrame is superior as it only updates the timer as frequenly as the browser can repaint. Moreover, requestAnimationFrame will not run when the app is in the background, so it has better performance and saves battery life.
