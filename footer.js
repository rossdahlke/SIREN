function createFooter() {
    const footer = document.createElement('footer');
    const container = document.createElement('div');
    container.className = 'container';
    const p = document.createElement('p');
    p.textContent = '© 2023 SIREN Project. All rights reserved.';
    container.appendChild(p);
    footer.appendChild(container);
    return footer;
}

document.addEventListener('DOMContentLoaded', function() {
    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.parentNode.replaceChild(createFooter(), existingFooter);
    } else {
        document.body.appendChild(createFooter());
    }
});