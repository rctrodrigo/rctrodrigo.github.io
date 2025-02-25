// Brand name
const siteName = "Raven Rodrigo";

/* Objects in Array */
const navigationLinks = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Projects', link: '#' },
    { name: 'Tools',  link: '#' },
    { name: 'Contact', link: '#' }
];

/* Array.map function and Template Literals */ 
const navBarMenu = `
${navigationLinks
    .map(navLinks => `<li class="navbar-items">
        <a href="#" class="navbar-link">${navLinks.name}</a>`).join(' ')}</li>
`;

document.querySelector('ul').innerHTML = navBarMenu;


// open modal
function openModal() {
    document.getElementById('modal-resume').classList.add('open');
    document.body.classList.add('modal-resume-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.modal-resume.open').classList.remove('open');
    document.body.classList.remove('modal-resume-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    this.document.addEventListener('click', event => {
        if (event.target.classList.contains('modal-resume')) {
            closeModal();
        }
    })
});

