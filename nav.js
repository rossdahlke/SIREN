function createNavigation() {
    const navItems = [
        { href: "./", text: "Home" },
        { href: "about.html", text: "About" },
        { href: "consent.html", text: "Informed Consent" },
        { href: "terms.html", text: "Terms of Service" },
        { href: "privacy.html", text: "Privacy Notice" },
        { href: "instructions.html", text: "Installation Instructions" },
        { href: "download.html", text: "Download APK" }
    ];

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        if (item.href === './' && window.location.pathname === '/' || window.location.pathname.endsWith(item.href)) {
            a.classList.add('active');
        }
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    return nav;
}

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header .container');
    const existingNav = header.querySelector('nav');
    if (existingNav) {
        existingNav.parentNode.replaceChild(createNavigation(), existingNav);
    } else {
        header.appendChild(createNavigation());
    }
});