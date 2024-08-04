function toggleModal(modalID) {
    const modal = document.getElementById(modalID);
    const isModalOpen = !modal.classList.contains('hidden');

    // Toggle modal visibility
    modal.classList.toggle('hidden', isModalOpen);

    // Toggle body blur effect
    if (isModalOpen) {
        document.body.classList.remove('blur-background');
    } else {
        document.body.classList.add('blur-background');
    }
}
