function Open() {
  //   document.getElementById("sidebar").classList.remove("left-[-300px]");
  document.querySelector("#bodyhide").classList.toggle("hidden");
  document.querySelector("#sidebar").classList.toggle("hidden");

  document.querySelector("#nav").classList.toggle("hidden");
}
function Close() {
  //   document.getElementById("sidebar").classList.add("left-[-300px]");
  document.querySelector("#nav").classList.toggle("hidden");
  document.querySelector("#bodyhide").classList.toggle("hidden");
  document.querySelector("#sidebar").classList.toggle("hidden");
}
