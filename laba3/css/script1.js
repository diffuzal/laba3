
const textFragments = document.querySelectorAll('.text-fragment');


function animateText() {
    let delay = 350;

    textFragments.forEach((fragment, index) => {
        setTimeout(() => {
            fragment.style.display = 'block';
        }, delay * index);
    });


    setTimeout(() => {
        textFragments.forEach((fragment) => {
            fragment.style.display = 'none';
        });


        setTimeout(animateText, 1);
    }, delay * textFragments.length);
}


animateText();