// open modal
function openModal() {
    document.getElementById('modal-resume').classList.add('open');
    document.body.classList.add('modal-resume-open');
}

// cloase currently open modal
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
})