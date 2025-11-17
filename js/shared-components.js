function insertNavbar() {
    const navHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <a href="index.html">
                    <img src="imgs/plans_img/logo.png" alt="TaxASAP Logo" class="logo">
                </a>
            </div>
            <div class="nav-right">
                <a href="index.html">Home</a>
                <a href="pricing.html">Plans</a>
                <a href="features.html">Features</a>
                <a href="team.html">Team</a>
                <a href="pricing.html" class="btns">Get Started</a>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}
function insertStaticFooter() {
    const footerHTML = `
        <footer class="static-footer">
            <div class="footer-content">
                <div>
                    <h3>About TaxASAP</h3>
                    <p>An app that makes filing taxes faster and easier.</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <a href="plans.html">Pricing</a>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <a href="features.html">About Us</a>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li><a href="mailto:engineering.ugrad@uOttawa.ca">engineering.ugrad@uOttawa.ca;</a></li>
                        <li><a href="tel:+16135625700">+1 (613) 562-5700</a></li>
                        <li><a href="https://github.com/Groupe19/TaxASAP" target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
document.addEventListener('DOMContentLoaded', function() {
    if (document.body.hasAttribute('data-include-navbar')) {
        insertNavbar();
    }
    if (document.body.hasAttribute('data-include-scrolling-footer')) {
        insertScrollingFooter();
    }
    if (document.body.hasAttribute('data-include-static-footer')) {
        insertStaticFooter();
    }
});