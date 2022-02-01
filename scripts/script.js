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

  if (dayNum == 1) {
    dayName.innerHTML = "Day";
  }

  if (hourNum == 1) {
    hourName.innerHTML = "Hour";
  }

  if (minNum == 1) {
    minuteName.innerHTML = "Minute";
  }

  if (secNum == 1) {
    secondName.innerHTML = "Second";
  } else {
    secondName.innerHTML = "Seconds";
  }

  dayEl.innerHTML = dayNum;
  hourEl.innerHTML = hourNum;
  minuteEL.innerHTML = minNum;
  secondEL.innerHTML = secNum;
};

calculateTime();

setInterval(calculateTime, 1000);
