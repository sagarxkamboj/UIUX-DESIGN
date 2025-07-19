document.getElementById("link").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Demo Login Success!!");
  alert("Redirecting To website");
});

const modeButton = document.querySelector("#mode-selector button");

function updateButtonText() {
  if (document.body.classList.contains("light-mode")) {
    modeButton.textContent = "Dark Mode";
  } else {
    modeButton.textContent = "Light Mode";
  }
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
} else {
  document.body.classList.remove("light-mode");
}
updateButtonText();

modeButton.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  updateButtonText();
});
