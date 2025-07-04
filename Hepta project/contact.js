  const toggler = document.getElementById("menuToggler");
  const menu = document.getElementById("navbarToggleExternalContent");

  menu.addEventListener("shown.bs.collapse", () => {
    toggler.classList.add("custom-toggler");
  });

  menu.addEventListener("hidden.bs.collapse", () => {
    toggler.classList.remove("custom-toggler");
  });