$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function (event) {
        event.preventDefault(); // Отменяет ссылки
        let activeContent = $(this).attr('href'); // this позволяет работать сконкретным элементом (на кот. клиикнули), attr обращение к атрибуту (хранение id)
        $('.visible').toggleClass('visible'); // Находим класс и отключаем его
        $(activeContent).toggleClass('visible'); // toggleClass добавление класса
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');
    });
});