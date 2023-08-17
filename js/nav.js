function Open() {
  document.getElementById("sidebar").classList.remove("left-[-300px]");
  document.querySelector("#body").classList.toggle("hidden");

  document.querySelector("#nav").classList.toggle("hidden");
}
function Close() {
  document.getElementById("sidebar").classList.add("left-[-300px]");
  document.querySelector("#nav").classList.toggle("hidden");
  document.querySelector("#body").classList.toggle("hidden");
}
