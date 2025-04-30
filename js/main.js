let modeToggle = document.querySelector(".switch");
let body = document.querySelector("body");

const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector(".sidebar-toggle");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  //   if (body.classList.contains("dark")) {
  //     localStorage.setItem("mode", "dark");
  //   } else {
  //     localStorage.setItem("mode", "light");
  //   }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
