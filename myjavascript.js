document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
    });
});