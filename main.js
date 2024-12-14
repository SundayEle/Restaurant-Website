const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "1000",
  reset: true,
});
sr.reveal(".hero-button", { origin: "bottom", delay: 150 });

sr.reveal(".controls", {});
sr.reveal(".title-text", { distance: "10px", delay: 150, interval: 100 });
sr.reveal(".about-subtitle", { origin: "top", delay: 150 });
sr.reveal(".about-info", { origin: "bottom", delay: 100 });

sr.reveal(".fab", { origin: "right", delay: 300 });

sr.reveal(".food-card", { origin: "bottom", delay: 100 });
sr.reveal(".food-btn", { origin: "top", delay: 100 });

sr.reveal(".title-text", {});
sr.reveal(".contact_info", { distance: "10px", delay: 150, interval: 100 });
sr.reveal(".contact_button", { origin: "bottom", delay: 100 });

sr.reveal(".footer_title", { delay: 150 });
sr.reveal(".footer_text", { origin: "bottom", delay: 100 });
sr.reveal(".footer_link", { origin: "right", delay: 150 });
sr.reveal(".footer_social", { origin: "bottom", delay: 150 });
sr.reveal(".footer_copyright", { delay: 100 });
