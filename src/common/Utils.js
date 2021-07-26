export function convertToDisplayTime(timestamp) {
  //The argument timestamp is a number in miliseconds.
  //This function returns a converted timestamp to the 00:00:00:00 format.

  const hours = Math.floor(timestamp / (1000 * 60 * 60));
  timestamp -= hours * (1000 * 60 * 60);
  const mins = Math.floor(timestamp / (1000 * 60));
  timestamp -= mins * (1000 * 60);
  const secs = Math.floor(timestamp / 1000);
  timestamp -= secs * 1000;
  const centisecs = Math.floor(timestamp / 10);

  const numbers = [hours, mins, secs, centisecs];
  const displayTime = numbers
    .map((num) => num.toString().padStart(2, "0"))
    .join(":");
  return displayTime;
}
