// №1
const extractNumbers = (str) => {
    return str.match(/\d/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]
// №2
function fibonacciRecursion(prev = 0, curr = 1) {
    if (prev <= 144) {
        console.log(prev);
        setTimeout(() => fibonacciRecursion(curr, prev + curr), 1000); // Задержка в 1 секунду
    }
}
fibonacciRecursion()

// №3
const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        const products = await response.json();
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

// Вызов функции
fetchProducts();

// №4
const buttonColors = document.querySelector('div')
buttonColors.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
    const color = event.target.textContent
    document.body.style.backgroundColor = color
}})

// №5
const square = document.getElementById('square');
const toggleButton = document.getElementById('on_off_Button');

toggleButton.addEventListener('click', () => {
    if (square.style.display === 'none') {
        square.style.display = 'block'; // Показать блок
    } else {
        square.style.display = 'none'; // Скрыть блок
    }
});
// №6
let count = 0; // Начало
const counterDisplay = document.getElementById('Timer');

const intervalId = setInterval(() => {
    count += 1; // Увеличиваем счётчик на 1
    counterDisplay.textContent = count; // Обновляем отображение счётчика

    if (count >= 100) {
        clearInterval(intervalId); // Останавливаем счётчик
    }
}, 1); // Интервал 1 миллисекунда
// №7
async function fetchData() {    try {
    const response = await fetch('/index.json');
    if (!response.ok) {
        throw new Error(`HTTP ошибка: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)    } catch (error) {
    console.error('Ошибка', error.message)    }
}
const fetchButton = document.querySelector('#JsonButton')
fetchButton.addEventListener('click', fetchData)