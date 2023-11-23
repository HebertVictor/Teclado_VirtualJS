const teclasPiano = document.querySelectorAll(".teclas_piano .notas");

const volumeSlider = document.querySelector(".volume-slider input");

const notasCheck = document.querySelector(".notas-check input");

let mapedKeys = [];

let audio = new Audio("src/sounds/a.wav");

const playSound = (nota) => {
  audio.src = `src/sounds/${nota}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-nota="${nota}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

teclasPiano.forEach((nota) => {
  console.log(nota.dataset.nota);
  nota.addEventListener("click", () => playSound(nota.dataset.nota));
  mapedKeys.push(nota.dataset.nota);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) playSound(e.key);
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

const showOrHidekeys = () => {
  teclasPiano.forEach((key) => key.classList.toggle("hidden"));
};
notasCheck.addEventListener("click", showOrHidekeys);
