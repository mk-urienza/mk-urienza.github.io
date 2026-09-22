const themeButton = document.getElementById("themeButton");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// =========================================================
// DARK MODE
// =========================================================

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}


if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "portfolio-theme",
            isDark ? "dark" : "light"
        );

    });

}


// =========================================================
// MOBILE MENU
// =========================================================

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const expanded =
            navLinks.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            expanded
        );

    });


    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


    window.addEventListener("resize", () => {

        if (window.innerWidth > 760) {

            navLinks.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}
