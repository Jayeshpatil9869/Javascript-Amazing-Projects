let isStatus = document.querySelector("h5");
let btn = document.querySelector("#add");

let check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "Green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    check = 0;
    btn.innerHTML = "Add Friend";
  }
});
