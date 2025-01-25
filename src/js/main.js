// ||| MAIN ||| //
document.addEventListener("DOMContentLoaded", (event) => {
    // NAV MENU //
    let lastScroll = 0;
    const navMenu = document.getElementById("nav-menu");

    window.addEventListener("scroll", () => {
        const currentScroll =
            window.scrollY || document.documentElement.scrollTop;

        navMenu.classList.toggle(
            "hidden",
            currentScroll >= 50 && currentScroll > lastScroll
        );

        lastScroll = currentScroll;
    });

    window.addEventListener("wheel", function (event) {
        if (lastScroll == 0 && event.deltaY > 0) {
            window.scrollTo({ top: 60, behavior: "smooth" });
        }
    });

    // TAB BAR //
    function activateNav(NavID) {
        document.querySelectorAll(".active").forEach((content) => {
            content.classList.remove("active");
        });

        document.querySelectorAll(NavID).forEach((content) => {
            content.classList.add("active");
        });

        sessionStorage.setItem("activeNavID", NavID);
    }

    const activeNavID = sessionStorage.getItem("activeNavID");

    if (activeNavID) {
        activateNav(activeNavID);
    } else {
        activateNav("#letters");
    }

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            activateNav(`#${this.id}`);
        });
    });
});
