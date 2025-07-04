  const toggler = document.getElementById("menuToggler");
  const menu = document.getElementById("navbarToggleExternalContent");

  menu.addEventListener("shown.bs.collapse", () => {
    toggler.classList.add("custom-toggler");
  });

  menu.addEventListener("hidden.bs.collapse", () => {
    toggler.classList.remove("custom-toggler");
  });


// welcome section js code

//   const openBtn = document.getElementById('openVideo');
//   const closeBtn = document.getElementById('closeVideo');
//   const popup = document.getElementById('videoPopup');
//   const iframe = document.getElementById('popupVideo');

//   openBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     iframe.src = "https://www.youtube.com/embed/fB00t4At0rk?autoplay=1";
//     popup.style.display = "flex";
//   });

//   closeBtn.addEventListener('click', function () {
//     iframe.src = ""; // stop video
//     popup.style.display = "none";
//   });

//   // Optional: Close on outside click
//   popup.addEventListener('click', function (e) {
//     if (e.target === popup) {
//       iframe.src = "";
//       popup.style.display = "none";
//     }
//   });