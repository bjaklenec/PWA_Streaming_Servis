import { formatTimer } from "./timer";

/**
 * @param {array}
 * @param {object}
*/

const deleteElement = (array, target) => {
  return array.filter(item => {
    return item != target;
  });
};

/**
 * @param {array} songs
 */

const threatSongs = songs => {
  return songs.map(song => {
    song["isPlaying"] = false;
    song["percent"] = 0;
    song["currentlyTimer"] = "00:00";
    song["totalTimer"] = formatTimer(song.seconds);

    return song;
  });
};

/**
 * @param {array} array
 */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

 export {deleteElement, threatSongs, shuffleArray};