// Function to load the header
function loadHeader() {
    fetch(BASE_URL + 'header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            document.getElementById('logo-img').src = BASE_URL + 'assets/logo.png';
            document.getElementById('menu-img').src = BASE_URL + 'assets/menu bar.png';

            document.querySelectorAll('.url-home').forEach(function(element) {
                element.href = H_URL + '/Home_Page.html';
            });
            
            document.getElementById('url-gallery').href = G_URL + '/Gallery_Page.html';
            document.getElementById('url-product').href = P_URL + '/Product_Page.html';
            document.getElementById('url-event').href = E_URL + '/Event_Page.html';
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to load the footer
function loadFooter() {
    fetch(BASE_URL + 'footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;

            document.getElementById('location-img').src = BASE_URL + 'assets/location.png';
            document.getElementById('email-img').src = BASE_URL + 'assets/email.png';

            document.getElementById('fb-img').src = BASE_URL + 'assets/facebook.png';
            document.getElementById('ig-img').src = BASE_URL + 'assets/instagram.png';
            document.getElementById('tt-img').src = BASE_URL + 'assets/tiktok.png';
            document.getElementById('yt-img').src = BASE_URL + 'assets/youtube.png';
            document.getElementById('tw-img').src = BASE_URL + 'assets/twitter.png';

        })
        .catch(error => console.error('Error loading footer:', error));
}

// Load both header and footer when the page loads
window.onload = function() {
    loadHeader();
    loadFooter();
};
