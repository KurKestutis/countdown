const dayEl = document.getElementById("dayNumberId");
const hourEl = document.getElementById("hourNumberId");
const minuteEL = document.getElementById("minNumberId");
const secondEL = document.getElementById("secNumberId");

const calculateTime = () => {
  const target = new Date("1 Jan 2023");
  const timeNow = new Date();
  const timeDifferenceInSeconds = (target - timeNow) / 1000;
  console.log(timeDifferenceInSeconds);

  const dayNum = Math.floor(timeDifferenceInSeconds / 3600 / 24);
  const hourNum = Math.floor((timeDifferenceInSeconds / 3600) % 24);
  const minNum = Math.floor((timeDifferenceInSeconds / 60) % 60);
  const secNum = Math.floor(timeDifferenceInSeconds % 60);
  console.log(dayNum, hourNum, minNum, secNum);

  dayEl.innerHTML = dayNum;
  hourEl.innerHTML = hourNum;
  minuteEL.innerHTML = minNum;
  secondEL.innerHTML = secNum;
};

calculateTime();

setInterval(calculateTime, 1000);
