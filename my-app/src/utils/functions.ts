export const minToTime = (num: number) => {
  let min: any = num % 60;
  let hour: any = (num - min) / 60;
  if (hour < 10) {
    hour = String(`0${hour}`);
  }
  if (min < 10) {
    min = String(`0${min}`);
  }
  return hour + ":" + min;
};
