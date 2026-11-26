const route = document.getElementById("route");
const replay = document.getElementById("play");
replay.addEventListener("click", () => {
  route.classList.remove("running");
  requestAnimationFrame(() => requestAnimationFrame(() => route.classList.add("running")));
});
