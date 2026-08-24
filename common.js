document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const heading = document.getElementsByTagName("h1");
    if (heading[0]) console.log(heading[0].textContent);
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("backdrop");


    menuBtn.addEventListener("click", () => {

        sidebar.classList.remove("-translate-x-full");
        backdrop.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.add("-translate-x-full");
        backdrop.classList.add("hidden");
    });

    backdrop.addEventListener("click", () => {
        sidebar.classList.add("-translate-x-full");
        backdrop.classList.add("hidden");
    });
});