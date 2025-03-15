document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    for (const bar of progressBars) {
        let percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
    }
});
