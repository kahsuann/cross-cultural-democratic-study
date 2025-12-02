const nextBtn = document.getElementById('next-btn');

let position = 1;
nextBtn.addEventListener('click', function() {
    const prevText = document.getElementById('text-' + position.toString())
    position++;
    const nextText = document.getElementById('text-' + position.toString())
    prevText.style.display = 'none';
    nextText.style.display = 'flex';
    if (position == 8) {
        nextBtn.style.display = 'none';
    }
});