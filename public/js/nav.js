function initNav() {
  let el = document.getElementById("divd-main-nav");
  let subNav = document.getElementById("divd-sub-nav");

  function showSubNav() {
    subNav.classList.add("active");
  }

  function hideSubNav() {
    subNav.classList.remove("active");
  }

  let items = el.querySelectorAll(".main-nav-item");
  items.forEach((item) => {
    item.addEventListener("mouseover", showSubNav);
    item.addEventListener("mouseout", hideSubNav);
  });
}

initNav();
