// ||| MAIN ||| //
document.addEventListener("DOMContentLoaded", (event) => {
    // NAV BAR //
    let lastScroll = 0;
    const navTab = document.getElementById("nav-tab");

    window.addEventListener("scroll", () => {
        const currentScroll =
            window.scrollY || document.documentElement.scrollTop;

        navTab.classList.toggle(
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
    function activateTab(TabID) {
        document.querySelectorAll(".active").forEach((content) => {
            content.classList.remove("active");
        });

        document.querySelectorAll(TabID).forEach((content) => {
            content.classList.add("active");
        });

        sessionStorage.setItem("activeTabID", TabID);
    }

    const activeTabID = sessionStorage.getItem("activeTabID");

    if (activeTabID) {
        activateTab(activeTabID);
    } else {
        activateTab("#letters");
    }

    document.querySelectorAll(".tab-link").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            activateTab(`#${this.id}`);
        });
    });
});
