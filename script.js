const checkBox = document.querySelector("#check"),
  path = document.querySelector(".trazo"),
  length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

checkBox.addEventListener("change", function () {
  if (this.checked == true) {
    path.classList.add("animado");
    path.style.strokeDashoffset = 0;
  } else {
    path.classList.remove("animado");
    path.style.strokeDashoffset = length;
  }
});
