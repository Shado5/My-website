document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    for (const bar of progressBars) {
        let percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
    }
});
// Wait for the DOM content to load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all images with the class 'clickable-image'
    const clickableImages = document.querySelectorAll('.clickable-image');
    
    // Add a click event listener to each image
    clickableImages.forEach(image => {
        image.addEventListener('click', () => {
            // Get the link from the data-link attribute
            const link = image.getAttribute('data-link');
             window.open(link, '_blank'); // Redirect to the link
        });
    });
});