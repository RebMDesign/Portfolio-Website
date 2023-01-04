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

function underlineCurrentNavItem() {
  const current = document.location.pathname;
  const navItems = $("#header nav li a");
  if (current.endsWith("index.html")) {
    $(navItems[0]).css("text-decoration", "underline");
  } else if (current.endsWith("work.html")) {
    $(navItems[1]).css("text-decoration", "underline");
  } else if (current.endsWith("about.html")) {
    $(navItems[2]).css("text-decoration", "underline");
  }
}

underlineCurrentNavItem()

function navigate(to) {
  document.location.pathname = to;
}

addEventListener("resize", (event) => {
  if (window.innerWidth > 640 && isOpen) {
    menuToggle();
  }
});

addEventListener("scroll", (e) => {
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
