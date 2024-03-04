const tabList = document.querySelector('#tabList');
const tabcontent = document.querySelectorAll('.tabcontent');
const tabLinks = document.querySelectorAll('.tablink');

const defaultOpen = document.querySelector('#defaultOpen');
const active = document.querySelector('.tabcontent.active');

// getComputedStyle(Element)- позволяет получить значения любого
// CSS свойства элемента даже из CSS файла

console.log(getComputedStyle(active).backgroundColor)

//установить для кнопки по умолчанию такой же цвет как и у активной вкладки
defaultOpen.style.backgroundColor = getComputedStyle(active).backgroundColor;

tabList.addEventListener('click', (e) => {
    //Кнопка по которой нажали
    const targetElement = e.target;
    console.log(targetElement);;
    //элемент.dataset.имя - Обращение к свойству data фтрибуту с указаным именем
    const dataCity = targetElement.dataset.city;
    console.log(dataCity)

    //Перебрать все вкладки с контентом
    for (let tab of tabcontent) {
        //скрыть все вкладки
        tab.classList.remove('active');
        //если id вкладки равен дата атрибуту:
        if (tab.id == dataCity) {
            tab.classList.add('active')
        }
    }
})