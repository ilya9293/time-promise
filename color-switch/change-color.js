const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const ref = {
  body: document.querySelector("body"),
  start: document.querySelector(`[data-action="start"]`),
  stop: document.querySelector(`[data-action="stop"]`),
};

let timerId = null;

ref.start.addEventListener("click", onChangeColor);
ref.stop.addEventListener("click", () => {
  clearInterval(timerId);
  ref.start.removeAttribute("disabled");
});

function onChangeColor() {
  const lgth = colors.length + 1;
  ref.start.setAttribute("disabled", "");
  timerId = setInterval(() => {
    ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, lgth)];
  }, 1000);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
