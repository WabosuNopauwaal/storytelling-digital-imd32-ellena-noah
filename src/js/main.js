document.addEventListener("DOMContentLoaded", function () {
  const dropDownMenus = document.querySelectorAll(".drop-down-menu");

  dropDownMenus.forEach(function (menu) {
    menu.addEventListener("mouseenter", function () {
      menu.classList.add("open");
    });

    menu.addEventListener("mouseleave", function () {
      menu.classList.remove("open");
    });
  });
});
