// Находим элементы на странице по их ID
const button = document.getElementById('actionButton');
const counterText = document.getElementById('counterText');

// Создаем переменную для хранения количества кликов
let clickCount = 0;

// Добавляем слушатель события: что делать при клике на кнопку
button.addEventListener('click', () => {
    // Увеличиваем счетчик на 1
    clickCount++; 
    
    // Обновляем текст на странице
    counterText.textContent = `Кликов: ${clickCount}`; 
    
    // Добавим немного логики: если кликов больше 10, меняем цвет текста
    if (clickCount >= 10) {
        counterText.style.color = '#e74c3c'; // Красный цвет
    }
});
