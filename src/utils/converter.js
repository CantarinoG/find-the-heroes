export function miliToMinSec(milis) {
    const seconds = Math.round(milis/1000);
    const result = Math.floor(seconds/60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }) + ":" + (seconds%60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      return result;
}
