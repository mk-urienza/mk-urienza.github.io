// ============================================
// DARK MODE
// ============================================

const themeToggle = document.getElementById("themeToggle");


// Check whether the user previously selected dark mode
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀";

} else {

    themeToggle.textContent = "◐";

}


// Toggle dark mode
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀";

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "◐";

    }

});



// ============================================
// MOBILE MENU
// ============================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
