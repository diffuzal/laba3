// Получаем все элементы с классом "text-fragment"
const textFragments = document.querySelectorAll('.text-fragment');

// Функция для поочередного отображения фрагментов текста
function animateText() {
    let delay = 500; // Задержка между отображением фрагментов (в миллисекундах)

    textFragments.forEach((fragment, index) => {
        setTimeout(() => {
            fragment.style.display = 'block';
        }, delay * index);
    });
}

// Вызываем функцию анимации при загрузке страницы (или при другом событии)
window.addEventListener('load', animateText);