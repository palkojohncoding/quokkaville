// Load header and footer into placeholders
document.addEventListener("DOMContentLoaded", () => {
  fetch("index_header.html")
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load header: ${res.status}`);
      return res.text();
    })
    .then(data => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.innerHTML = data;
        loadHamburgerScript(); // optional re-init if hamburger needs events
      }
    })
    .catch(error => console.error('Header loading error:', error));

  fetch("index_footer.html")
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load footer: ${res.status}`);
      return res.text();
    })
    .then(data => {
      const indexFooter = document.getElementById("index_footer");
      if (indexFooter) {
        indexFooter.innerHTML = data;
      }
    })
    .catch(error => console.error('Footer loading error:', error));
});

// If hamburger JS depends on elements from header.html
function loadHamburgerScript() {
  const hamburger = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}
