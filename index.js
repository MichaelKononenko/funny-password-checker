const submit = document.querySelector("button");
const password = document.querySelector('input[type="password"]');
const about = document.querySelector(".about");
const backdrop = document.querySelector(".backdrop");

let goto = 100;

submit.addEventListener("mouseover", doMagic);
password.addEventListener("input", () =>
  password.value.length >= 8
    ? (submit.style = `background: rgb(62, 242, 62);`)
    : (submit.style = "background:null;")
);

function doMagic() {
  if (password.value.length >= 8) {
    submit.addEventListener("click", clickHandling);
    return;
  } else {
    submit.removeEventListener("click", submitClickHandling);
    submit.style = `transform:translateX(${goto}px); transition:transform linear 200ms;`;
    goto === 100 ? (goto = 0) : (goto = 100);
  }
}

function submitClickHandling(event) {
  event.preventDefault();
  console.log("hello");
}

about.addEventListener("click", () => backdrop.classList.remove("is-hidden"));

backdrop.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    backdrop.classList.add("is-hidden");
  }
});
