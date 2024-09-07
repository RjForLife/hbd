const navbarItems = document.querySelectorAll(".love-navbar li");

navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("loved");
  });
});

const cakeSection = document.querySelector(".cake-section");
const textSection = document.querySelector(".text-section");

cakeSection.addEventListener("mouseover", () => {
  cakeSection.classList.add("animated");
});

cakeSection.addEventListener("mouseout", () => {
  cakeSection.classList.remove("animated");
});

textSection.addEventListener("mouseover", () => {
  textSection.classList.add("animated");
});

textSection.addEventListener("mouseout", () => {
  textSection.classList.remove("animated");
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("click", (e) => {
    e.preventDefault();
    // setting a timeout enables this hack to work
    setTimeout(() => (radio.checked = !radio.checked), 0);
  });
});
