/**
 * @param {integer} seconds
 */

const formatTime = seconds => {
  let minutes = parseInt(seconds / 60).toString();
  seconds = parseInt(seconds % 60).toString();

  let output = minutes >= 10 ? `${minutes}` : `0${minutes}`;
  output += seconds >= 10 ? `:${seconds}` : `:0${seconds}`;

  return output;
};

export { formatTime };