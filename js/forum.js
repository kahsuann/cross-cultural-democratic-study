const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const postScript = document.getElementById('postscript');

let position = 1;

nextBtn.addEventListener('click', function() {
    const prevText = document.getElementById('text-' + position.toString())
    prevText.style.display = 'none';
    position++;
    if (position == 12) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
        postScript.style.display = 'block';
    } else {
        const nextText = document.getElementById('text-' + position.toString())
        nextText.style.display = 'flex';
        prevBtn.style.display = 'flex';
    }
});

prevBtn.addEventListener('click', function() {
    const currText = document.getElementById('text-' + position.toString())
    currText.style.display = 'none';
    position--;
    const prevText = document.getElementById('text-' + position.toString())
    prevText.style.display = 'flex';
    if (position == 1) {
        prevBtn.style.display = 'none';
    }
});