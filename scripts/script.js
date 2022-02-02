const dayEl = document.getElementById("dayNumberId");
const hourEl = document.getElementById("hourNumberId");
const minuteEL = document.getElementById("minNumberId");
const secondEL = document.getElementById("secNumberId");

const dayName = document.getElementById("dayNameId");
const hourName = document.getElementById("hourNameId");
const minuteName = document.getElementById("minNameId");
const secondName = document.getElementById("secNameId");

const calculateTime = () => {
  const timeNow = new Date();
  const target = new Date(`1 Jan ${timeNow.getFullYear() + 1}`);

  const timeDifferenceInSeconds = (target - timeNow) / 1000;

  const dayNum = Math.floor(timeDifferenceInSeconds / 3600 / 24);
  const hourNum = Math.floor((timeDifferenceInSeconds / 3600) % 24);
  const minNum = Math.floor((timeDifferenceInSeconds / 60) % 60);
  const secNum = Math.floor(timeDifferenceInSeconds % 60);

  dayName.innerHTML = `${dayNum == 1 ? "Day" : "Days"}`;
  hourName.innerHTML = `${hourNum == 1 ? "Hour" : "Hours"}`;
  minuteName.innerHTML = `${minNum == 1 ? "Minute" : "Minutes"}`;
  secondName.innerHTML = `${secNum == 1 ? "Second" : "Seconds"}`;

  dayEl.innerHTML = dayNum;
  hourEl.innerHTML = hourNum;
  minuteEL.innerHTML = minNum;
  secondEL.innerHTML = secNum;
};

calculateTime();
setInterval(calculateTime, 1000);
