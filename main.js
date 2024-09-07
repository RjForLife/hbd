// uncheck radio buttons (unfortunatley this cannot be done with CSS alone)

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("click", (e) => {
    e.preventDefault();
    // setting a timeout enables this hack to work
    setTimeout(() => (radio.checked = !radio.checked), 0);
  });
});

// Target date and time in UTC (September 8th, 2024, 12:00 AM UTC)
// Target date and time in IST (September 8th, 2024, 12:00 AM IST)
var curDate = new Date("2024-09-08T00:00:00+05:30").getTime();

var a = setInterval(() => {
  var now = new Date().getTime(); // Current time in local timezone

  console.log("Current Time (Local): ", new Date(now).toString());
  console.log(
    "Target Time (IST): ",
    new Date(curDate).toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  var dist = curDate - now;

  var day = Math.floor(
    (dist % (1000 * 60 * 60 * 24 * 30.4)) / (1000 * 60 * 60 * 24)
  );
  var hour = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((dist % (1000 * 60)) / 1000);
  var month = Math.floor(dist / (1000 * 60 * 60 * 24 * 30.4));

  // Display the calculated countdown
  document.getElementById("1").innerHTML = month >= 0 ? month : 0;
  document.getElementById("2").innerHTML = day >= 0 ? day : 0;
  document.getElementById("3").innerHTML = hour >= 0 ? hour : 0;
  document.getElementById("4").innerHTML = min >= 0 ? min : 0;
  document.getElementById("5").innerHTML = sec >= 0 ? sec : 0;

  // Check if countdown has finished
  if (month <= 0 && day <= 0 && hour <= 0 && min <= 0 && sec <= 0) {
    clearInterval(a);

    var cakeImg = document.createElement("img");
    var happyBirthdayText = document.getElementById("count");

    var wrapper = document.getElementById("circle1");
    wrapper.classList.remove("invisible");

    happyBirthdayText.innerHTML = "Happy Birthday yayaya!❤️";

    cakeImg.src = "cake2.png";
    cakeImg.alt = "Cake";
    cakeImg.classList.add("slide-up");
    cakeImg.classList.add("cakee");

    document.querySelector(".dynamic").appendChild(cakeImg);

    setTimeout(function () {
      cakeImg.classList.add("show");
      happyBirthdayText.classList.add("show");
    }, 100);
  }
}, 1000);

const starBackground = document.querySelector(".star-background");

for (let i = 0; i < 200; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.transform = `rotate(${Math.random() * 360}deg)`;
  starBackground.appendChild(star);
}
