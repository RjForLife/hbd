// uncheck radio buttons (unfortunatley this cannot be done with CSS alone)

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("click", (e) => {
    e.preventDefault();
    // setting a timeout enables this hack to work
    setTimeout(() => (radio.checked = !radio.checked), 0);
  });
});

var curDate = new Date("2024-09-08").getTime();

var a = setInterval(() => {
  var now = new Date().getTime();
  var dist = curDate - now;

  var day = Math.floor(
    (dist % (1000 * 60 * 60 * 24 * 30.4)) / (1000 * 60 * 60 * 24)
  );
  var hour = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((dist % (1000 * 60)) / 1000);
  var month = Math.floor(dist / (1000 * 60 * 60 * 24 * 30.4));

  document.getElementById("1").innerHTML = month >= 0 ? month : 0;
  document.getElementById("2").innerHTML = day >= 0 ? day : 0;
  document.getElementById("3").innerHTML = hour >= 0 ? hour : 0;
  document.getElementById("4").innerHTML = min >= 0 ? min : 0;
  document.getElementById("5").innerHTML = sec >= 0 ? sec : 0;

  if (month <= 0 && day <= 0 && hour <= 0 && min <= 0 && sec <= 0) {
    // Clear the interval to stop the countdown
    clearInterval(a);

    // Append cake image with the sliding effect
    var cakeImg = document.createElement("img");
    var happyBirthdayText = document.getElementById("count");

    var wrapper = document.getElementById("circle1");

    // Add the 'visible' class and remove the 'invisible' class
    // wrapper.classList.add("visible");
    wrapper.classList.remove("invisible");

    happyBirthdayText.innerHTML = "Happy Birthday yayaya!❤️";
    // Set the text content for the paragraph

    cakeImg.src = "cake2.png"; // Replace with the actual path to your cake image
    cakeImg.alt = "Cake";
    cakeImg.classList.add("slide-up");
    cakeImg.classList.add("cakee");

    // Append the image and text to the container with class "dynamic"
    document.querySelector(".dynamic").appendChild(cakeImg);

    // Optionally, add the "show" class to trigger the animation
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
