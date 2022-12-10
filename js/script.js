var isOpen = false;

function menuToggle() {
  isOpen = !isOpen;

  var x = document.getElementById("mynavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
  var y = document.getElementById("header");
  if (!y.classList.contains("responsive")) {
    y.classList.add("responsive");
  } else {
    y.classList.remove("responsive");
  }

  var icon = document.querySelector(".icon > i");
  if (icon.className === "fa-solid fa-bars") {
    icon.className = "fa-solid fa-x";
  } else {
    icon.className = "fa-solid fa-bars";
  }

  if (isOpen) {
    $("#mynavtoggle").hide().fadeIn({ duration: 1000 });
  }
}

addEventListener("resize", (event) => {
  if (window.innerWidth > 640 && isOpen) {
    menuToggle();
  }
});

addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  var header = document.getElementById("header");
  if (window.scrollY > 200) {
    if (!header.classList.contains("mini")) {
      header.classList.add("mini");
    }
  } else {
    if (header.classList.contains("mini")) {
      header.classList.remove("mini");
    }
  }
});
