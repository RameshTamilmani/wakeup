// =========================
// SUBAM WEBSITE
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // Set the current year automatically in the footer
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Log a message for development/testing
    console.log(
        "Subam Bed House & Furnitures website loaded successfully."
    );

});