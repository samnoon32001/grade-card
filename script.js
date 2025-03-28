// Function to print the page with specific styles
function printPage() {
    // Trigger the print dialog
    window.print();
}

// Attach event listener to the existing button
document.getElementById("print").addEventListener("click", printPage);