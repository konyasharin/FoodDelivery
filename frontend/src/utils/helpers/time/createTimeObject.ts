type TimeObject = {
  seconds: number;
  minutes: number;
  hours: number;
};

export const createTimeObject = (timeInMs: number): TimeObject => {
  const timeInSeconds = Math.floor(timeInMs / 1000);
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;
  return {
    seconds,
    minutes,
    hours,
  };
};
