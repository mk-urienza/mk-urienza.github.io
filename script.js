// ==========================================================
// DARK MODE
// ==========================================================

const themeButton = document.getElementById("themeButton");

const storedTheme = localStorage.getItem("portfolio-theme");

const systemPrefersDark =
    window.matchMedia("(prefers-color-scheme: dark)").matches;


// Load saved preference.
// If none exists, use the visitor's system theme.

if (
    storedTheme === "dark" ||
    (!storedTheme && systemPrefersDark)
) {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";

} else {

    document.body.classList.remove("dark");

    themeButton.textContent = "☾";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeButton.textContent = "☀";

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeButton.textContent = "☾";

    }

});



// ==========================================================
// MOBILE NAVIGATION
// ==========================================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", () => {

    const opened =
        navLinks.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        opened
    );

});



// Close menu when navigation link is clicked

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



// Close mobile menu if window becomes desktop sized

window.addEventListener("resize", () => {

    if (window.innerWidth > 780) {

        navLinks.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
