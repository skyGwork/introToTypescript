// ! destructure
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);


// const first = (second) => { third }

const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number) {
  return a / b;
}

const logger = (message: string) => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};
