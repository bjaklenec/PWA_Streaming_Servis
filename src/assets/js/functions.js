import { formatTime } from "./time";

/**
 * @param {array}
 * @param {object}
*/

/**
 * @param {array} array
 */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

/**
 * @param {array} songs
 */

const threatSongs = songs => {
  return songs.map(song => {
    song["isPlaying"] = false;
    song["percent"] = 0;
    song["currentTime"] = "00:00";
    song["totalTime"] = formatTime(song.seconds);

    return song;
  });
};

 export {threatSongs, shuffle};