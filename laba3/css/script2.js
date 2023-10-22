const searchInput = document.getElementById('search-input');
const searchLabel = document.querySelector('.search-label');
const suggestionsList = document.getElementById('suggestions');
const suggestionsData = [];
let inputStarted = false;

searchInput.addEventListener('focus', () => {
    searchLabel.style.transform = 'translateY(-100%)';
    if (!inputStarted) {
        showSuggestions('');
    }
});

searchInput.addEventListener('blur', () => {
    if (!searchInput.value.trim()) {
        searchLabel.style.transform = 'translateY(-50%)';
        suggestionsList.style.display = 'none'; // Скрываем подсказки при возврате в исходное положение
    }
});

searchInput.addEventListener('input', () => {
    inputStarted = true;
    const inputValue = searchInput.value.trim();
    if (inputValue) {
        showSuggestions(inputValue);
    } else {
        suggestionsList.style.display = 'none'; // Скрываем подсказки, если поле ввода пустое
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const inputValue = searchInput.value.trim();
        if (inputValue) {
            suggestionsData.push(inputValue); // Сохраняем текст в подсказках
            showSuggestions(inputValue);
            searchInput.value = ''; // Очищаем поле ввода
        }
    }
});

searchInput.addEventListener('click', () => {
    const inputValue = searchInput.value.trim();
    if (inputValue) {
        showSuggestions(inputValue);
    }
});

function showSuggestions(query) {
    suggestionsList.innerHTML = ''; // Очистите предыдущие подсказки
    // Добавьте подсказки как <li> элементы в suggestionsList
    suggestionsData.forEach((suggestion) => {
        suggestionsList.innerHTML += `<li>${suggestion}</li>`;
    });
    suggestionsList.style.display = 'block';
}