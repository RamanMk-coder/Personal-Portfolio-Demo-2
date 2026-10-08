// Raman Mahakalkar Portfolio - Interactive Logic

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Theme
const savedTheme = localStorage.getItem("raman-theme");
if (savedTheme === "light") body.classList.add("light");
updateThemeIcon();

function updateThemeIcon() {
  themeToggle.textContent = body.classList.contains("light") ? "☾" : "☀";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("raman-theme", body.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
});

// Mobile menu
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Active navigation
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove("active"));
      const current = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (current) current.classList.add("active");
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => sectionObserver.observe(section));

// Contact form: opens default email client (no backend required)
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    formNote.textContent = "Please complete all fields.";
    return;
  }

  const bodyText = `Hello Raman,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
  window.location.href =
    `mailto:devendramahakalkar8@gmail.com?subject=${encodeURIComponent(subject)}&body=${bodyText}`;

  formNote.textContent = "Opening your email application...";
});

// Prevent placeholder project/social links from jumping to top.
document.querySelectorAll(".disabled-link, .social-placeholder").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    alert("Add your real project or social profile URL in index.html.");
  });
});
