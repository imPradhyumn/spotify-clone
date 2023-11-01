export const millisToMinutes = (millis: number | undefined) => {
  console.log(millis);
  if (!millis) return "0:00";

  let minutes = Math.floor(millis / 60);
  let seconds = Math.round(millis % 60);

  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
