export function convertToDisplayTime(timestamp) {
  //The function takes one argument, a timestamp in miliseconds.
  //It converts the timestamp to the 00:00:00:00 format and returns the converted value.

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
