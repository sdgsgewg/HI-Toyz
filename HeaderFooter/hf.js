// Function to load the header
function loadHeader() {
    fetch('../../headerFooter/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to load the footer
function loadFooter() {
    fetch('../../headerFooter/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Load both header and footer when the page loads
window.onload = function() {
    loadHeader();
    loadFooter();
};
