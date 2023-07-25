const button = document.querySelector(".card-body button");
const h1 = document.querySelector(".card-body h1");
const input = document.querySelector(".card-body input");
const bar = document.querySelector(".progress-bar .bar");

let count;

button.onclick = () => {
  const value = input.value;
  bar.style.width = "100%";
  h1.innerHTML = value;
  input.value = "";
  count = value;

  let interval = setInterval(() => {
    count--;
    h1.innerHTML = count;

    bar.style.width = `${(100 * count) / value}%`;

    if (count <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};
