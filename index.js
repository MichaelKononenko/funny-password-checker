const submit = document.querySelector("button");
const password = document.querySelector('input[type="password"]');
const about = document.querySelector(".about");
const backdrop = document.querySelector(".backdrop");

submit.addEventListener("click", doMagic);

let goto = 100;

function doMagic(event) {
  event.preventDefault();
  if (password.value.length >= 8) {
    return;
  } else {
    submit.style = `transform:translateX(${goto}px); transition:transform linear 200ms;`;
    goto === 100 ? (goto = 0) : (goto = 100);
  }
}

about.addEventListener("click", () => backdrop.classList.remove("is-hidden"));

backdrop.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    backdrop.classList.add("is-hidden");
  }
});
