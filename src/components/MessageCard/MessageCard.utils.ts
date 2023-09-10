export const getTimeOfMessage = (timestamp: number) => {
  const date = new Date(timestamp);
  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  hours = hours > 9 ? hours : `0${hours}`;
  const strTime = hours + ":" + minutes + ampm;
  return strTime;
};
