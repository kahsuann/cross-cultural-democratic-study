const nextBtn = document.getElementById('next-btn');
const postScript = document.getElementById('postscript');

let position = 1;
nextBtn.addEventListener('click', function() {
    const prevText = document.getElementById('text-' + position.toString())
    prevText.style.display = 'none';
    position++;
    if (position == 9) {
        nextBtn.style.display = 'none';
        postScript.style.display = 'block';
    } else {
        const nextText = document.getElementById('text-' + position.toString())
        nextText.style.display = 'flex';
    }
});