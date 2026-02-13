function nextPage() {
    // Hide the question container
    document.getElementById('main-container').classList.add('hidden');
    // Show the success container
    const successContainer = document.getElementById('success-container');
    successContainer.classList.remove('hidden');

    // Optional: Add confetti or more effects here
    document.body.style.backgroundColor = "#ff8fa3"; // Slightly darker pink for celebration
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);

    const noBtn = document.getElementById('noButton');
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}