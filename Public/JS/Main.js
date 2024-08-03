function toggleModal(modalID) {
    const modal = document.getElementById(modalID);
    const isModalOpen = !modal.classList.contains('hidden');
    
    // Toggle modal visibility
    modal.classList.toggle('hidden', isModalOpen);
    
    // Toggle body blur effect
    const blurBackground = document.querySelector('.modal-background');
    if (isModalOpen) {
        blurBackground.classList.remove('blurred');
    } else {
        blurBackground.classList.add('blurred');
    }
}
