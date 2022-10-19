const submit = document.querySelector("button");
const password = document.querySelector('input[type="password"]');
const about = document.querySelector(".about");
const backdrop = document.querySelector(".backdrop");
const redirectInfo = document.querySelector(".redirect-info");

const displayWidth = document.documentElement.clientWidth;

let goto = 100;

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (password.value.length >= 8) {
    redirectInfo.classList.toggle("is-hidden");
    setTimeout(
      () => (location.href = "https://github.com/MichaelKononenko/funny-password-checker"),
      1500
    );
  }
});

displayWidth > 760
  ? submit.addEventListener("mouseover", mouseHandling)
  : submit.addEventListener("click", clickHandling);

password.addEventListener("input", () =>
  password.value.length >= 8
    ? (submit.style.backgroundColor = `rgb(62, 242, 62)`)
    : (submit.style.backgroundColor = null)
);

function mouseHandling(event) {
  if (password.value.length >= 8) {
    return;
  } else {
    submit.style = `transform:translateX(${goto}px); transition:transform linear 200ms;`;
    goto === 100 ? (goto = 0) : (goto = 100);
  }
}

function clickHandling(event) {
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
