// Boolean to track current time format
let is24hour = false;

function updateclock() {
  // 1️⃣ Get current date and time
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = "";

  // 2️⃣ Handle 12-hour format
  if (!is24hour) {
    session = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  }

  // 3️⃣ Add zero padding to single digits
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // 4️⃣ Display time (add session only in 12-hour format)
  const time = `${hours}:${minutes}:${seconds} ${!is24hour ? session : ""}`;
  document.querySelector(".hours").textContent = time;

  // 5️⃣ Days and Date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = days[now.getDay()]; // ✅ Use "now", not "date"
  const date = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  document.querySelector(".day").textContent = day;
  document.querySelector(".date").textContent = date;
}

// 6️⃣ Run clock every second
setInterval(updateclock, 1000);
updateclock(); // Run once immediately on load

// 7️⃣ Format toggle: 12-hour / 24-hour
document.querySelector(".toggleformate").addEventListener("click", () => {
  is24hour = !is24hour;
  document.querySelector(".toggleformate").textContent =
    is24hour ? "Switch to 12-hour format" : "Switch to 24-hour format";
});
