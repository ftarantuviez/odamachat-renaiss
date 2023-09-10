export const getTimeRemaining = (lastMessageTime: number) => {
  const expirationTimestamp = lastMessageTime + 24 * 60 * 60 * 1000;
  const currentTimestamp = Date.now();

  const timeDifference = expirationTimestamp - currentTimestamp;

  const hoursLeft = Math.floor(timeDifference / (60 * 60 * 1000));

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);

  const answer =
    lastMessageTime >= currentDate.getTime() ? "Hoy, quedan" : "Ayer, quedan";

  return `${answer} ${hoursLeft + 1}hs`;
};

export const trimLargeText = (str: string, chars = 25) => {
  if (str.length > chars) return str.substring(0, chars) + "...";

  return str;
};
