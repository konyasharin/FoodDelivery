type CreateTimeOptions = {
  milliseconds?: number;
  seconds?: number;
  minutes?: number;
  hours?: number;
};

export const createTime = (options?: CreateTimeOptions) => {
  let time = 0;
  if (options) {
    if (options.milliseconds) time += options.milliseconds;
    if (options.seconds) time += options.seconds * 1000;
    if (options.minutes) time += options.minutes * 1000 * 60;
    if (options.hours) time += options.hours * 1000 * 60 * 60;
  }
  return time;
};
