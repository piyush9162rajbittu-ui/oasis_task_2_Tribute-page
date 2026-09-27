// 1. Scroll Reveal Animation
const sections = document.querySelectorAll(
    ".about, .achievements, .quote, footer"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});


// 2. Back to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.className = "top-button";
topButton.title = "Back to top";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 3. Active Navigation
const navLinks = document.querySelectorAll("nav ul li a");

const pageSections = document.querySelectorAll(
    "#home, #about, #achievements, #quote"
);

window.addEventListener("scroll", () => {
    let current = "";

    pageSections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// 4. Dark Mode
const darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";
darkButton.className = "dark-button";
darkButton.title = "Toggle dark mode";

document.querySelector("nav").appendChild(darkButton);

darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkButton.innerHTML = "☀️";
    } else {
        darkButton.innerHTML = "🌙";
    }
});