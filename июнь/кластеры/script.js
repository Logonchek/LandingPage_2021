const citi = {
    FCO: ['Балашиха', 'Белгород', 'Борисоглебск', 'Брянск', 'Видное', 'Владимир', 'Воронеж', 'Воскресенск', 'Дмитров', 'Долгопрудный', 'Домодедово', 'Дубна', 'Егорьевск', 'Елец', 'Железнодорожный', 'Жуковский', 'Зеленоград', 'Иваново', 'Калуга', 'Клин', 'Коломна', 'Королев', 'Кострома', 'Красногорск', 'Курск', 'Липецк', 'Лиски', 'Лобня', 'Люберцы', 'Мичуринск', 'Москва', 'Муром', 'Мытищи', 'Наро-Фоминск', 'Нововоронеж', 'Новомосковск', 'Ногинск', 'Обнинск', 'Одинцово', 'Орел', 'Орехово-Зуево', 'Пенза', 'Подольск', 'Пушкино', 'Раменское', 'Реутов', 'Россошь', 'Рыбинск', 'Рязань', 'Сергиев ', 'Посад', 'Серпухов', 'Смоленск', 'Солнечногорск', 'Старый Оскол', 'Ступино', 'Тамбов', 'Тверь', 'Тула', 'Фрязино', 'Химки', 'Чехов', 'Щелково', 'Электросталь', 'Ярославль'],

    RF: ['Абакан', 'Азов', 'Альметьевск', 'Ангарск', 'Апатиты', 'Арзамас', 'Армавир', 'Архангельск', 'Астрахань', 'Ачинск', 'Балаково', 'Балашиха', 'Барнаул', 'Батайск', 'Белгород', 'Бердск', 'Березники', 'Берёзовский', 'Бийск', 'Благовещенск', 'Борисоглебск', 'Братск', 'Брянск', 'Великие Луки', 'Великий Новгород', 'Липецк', 'Видное', 'Владивосток', 'Владикавказ', 'Владимир', 'Волгоград', 'Муром', 'Волгодонск', 'Волжский', 'Вологда', 'Воронеж', 'Воскресенск', 'Воткинск', 'Всеволожск', 'Выборг', 'Выкса', 'Гатчина', 'Глазов', 'Грозный', 'Дзержинск', 'Димитровград', 'Дмитров', 'Рыбинск', 'Долгопрудный', 'Домодедово ', 'Дубна', 'Егорьевск', 'Смоленск', 'Ейск', 'Екатеринбург', 'Елец', 'Ессентуки', 'Железногорск', 'Железнодорожный', 'Жуковский', 'Зеленоград', 'Златоуст', 'Иваново', 'Ижевск', 'Йошкар-Ола', 'Казань', 'Калининград', 'Калуга', 'Каменск-Уральский', 'Каменск-Шахтинский', 'Камышин', 'Кемерово', 'Керчь', 'Киров', 'Кисловодск', 'Клин', 'Ковров', 'Коломна', 'Колпино', 'Комсомольск-на-Амуре', 'Королев', 'Кострома', 'Котлас', 'Красногорск', 'Краснодар', 'Красноуфимск', 'Красноярск', 'Кропоткин', 'Крым', 'Кстово', 'Курган', 'Курск', 'Кызыл', 'Ленинск-Кузнецкий', 'Липецк', 'Лиски', 'Лобня', 'Люберцы', 'Магнитогорск', 'Майкоп', 'Махачкала', 'Междуреченск', 'Минеральные Воды', 'Мичуринск', 'Москва', 'Муром', 'Мытищи', 'Набережные Челны', 'Нальчик', 'Наро-Фоминск', 'Находка', 'Невинномысск', 'Нефтекамск', 'Нефтеюганск', 'Нижневартовск', 'Нижнекамск', 'Нижний Новгород', 'Нижний Тагил', 'Нововоронеж', 'Новокузнецк', 'Новокуйбышевск', 'Новомосковск', 'Новороссийск', 'Новосибирск', 'Новотроицк', 'Новоуральск', 'Новочеркасск', 'Новый Уренгой', 'Ногинск', 'Ноябрьск', 'Обнинск', 'Одинцово', 'Озёрск', 'Октябрьский', 'Омск', 'Орел', 'Оренбург', 'Орехово-Зуево', 'Орск', 'Пенза', 'Первоуральск', 'Петрозаводск', 'Петропавловск-Камчатский', 'Подольск', 'Прокопьевск', 'Псков', 'Пушкин', 'Пушкино', 'Пятигорск', 'Раменское', 'Реутов', 'Россошь', 'Ростов-на-Дону', 'Рубцовск', 'Рыбинск', 'Рязань', 'Салават', 'Самара', 'Санкт-Петербург', 'Саранск', 'Сарапул', 'Саратов', 'Саров', 'Севастополь', 'Северодвинск', 'Северск', 'Сергиев Посад', 'Серпухов', 'Симферополь', 'Смоленск', 'Солнечногорск', 'Сосновый Бор', 'Сочи', 'Ставрополь', 'Старый Оскол', 'Стерлитамак', 'Ступино', 'Сургут', 'Сызрань', 'Сыктывкар', 'Таганрог', 'Тамбов', 'Тверь', 'Тобольск', 'Тольятти', 'Томск', 'Тула', 'Тюмень', 'Улан-Удэ', 'Ульяновск', 'Уссурийск', 'Уфа', 'Ухта', 'Фрязино', 'Хабаровск', 'Ханты-Мансийск', 'Химки', 'Чайковский', 'Чебоксары', 'Челябинск', 'Череповец', 'Черкесск', 'Чехов', 'Чита', 'Шахты', 'Щелково', 'Электросталь', 'Элиста', 'Энгельс', 'Южно-Сахалинск', 'Якутск', 'Ялта', 'Ярославль',],

    Povolzie: ['Альметьевск', 'Арзамас', 'Воткинск', 'Выкса', ' Глазов', 'Дзержинск', 'Димитровград', 'Ижевск', 'Йошкар-Ола', 'Казань', 'Киров', 'Кстово', 'Нижнекамск', 'Новокуйбышевск', 'Самара', 'Сарапул', 'Саров', 'Сызрань', ' Ульяновск', 'Чебоксары', 'Нижний Новгород', ' Набережные Челны',],

    Crimea: ['Керчь', 'Крым', 'Севастополь', 'Симферополь', ' Ялта',],

    Krasnodar: ['Армавир', 'Астрахань', 'Волгоград', 'Волжский', 'Ейск', 'Ессентуки', 'Камышин', 'Кисловодск', 'Краснодар', 'Кропоткин', 'Майкоп', 'Махачкала', ' Минеральные', 'Воды', 'Невинномысск', 'Новороссийск', 'Пятигорск', 'Сочи', 'Ставрополь',],

    RostovOnDon: ['Азов', 'Астрахань', 'Батайск', 'Владикавказ', 'Волгоград', 'Волгодонск', 'Волжский', 'Грозный', 'Ейск', 'Ессентуки', 'Камышин', ' Кисловодск', 'Нальчик', 'Невинномысск', 'Новочеркасск', 'Ставрополь', 'Таганрог', ' Черкесск', 'Шахты', 'Элиста', 'Каменск-Шахтинский', 'Ростов-на-Дону', 'Минеральные Воды',],

    Vostok: ['Благовещенск', 'Владивосток', 'Находка', 'Уссурийск', 'Хабаровск', 'Якутск', 'Комсомольск-на-Амуре', 'Петропавловск-Камчатский', 'Южно-Сахалинск',],

    Tatarstan: ['Альметьевск', 'Йошкар-Ола', 'Казань', 'Набережные Челны', 'Нижнекамск',],

    Yuzhnyy_Ural: ['Златоуст', 'Курган', 'Магнитогорск', 'Миасс', 'Озёрск', 'Тобольск', 'Челябинск'],

    Severo_Zapad: ['Апатиты', 'Архангельск  ', 'Вологда', 'Всеволожск', 'Выборг', 'Гатчина', 'Калининград', 'Колпино', 'Котлас', ' Мурманск', 'Петрозаводск', 'Псков', 'Пушкин', 'Северодвинск', 'Сыктывкар', 'Ухта', 'Череповец', ' Сосновый Бор', 'Великие Луки', 'Великий Новгород', 'Санкт-Петербург',],

    Sibir: ['Ангарск', 'Барнаул ', 'Бердск', 'Бийск', 'Братск', 'Иркутск', 'Кемерово', 'Междуреченск', ' Новокузнецк', 'Новосибирск', 'Омск', 'Прокопьевск', 'Рубцовск', 'Северск', 'Томск', 'Улан-Удэ', 'Ленинск-Кузнецкий',],

    Uralo_Sibirskiy: ['Златоуст', 'Курган ', 'Магнитогорск', 'Миасс', 'Нефтекамск', 'Озёрск', 'Октябрьский', 'Омск', ' Салават', 'Стерлитамак', 'Тобольск ', 'Тюмень', 'Уфа', 'Челябинск',],

    UrFO: ['Березники', 'Березовский', 'Верхняя Пышма', 'Екатеринбург', 'Златоуст ', 'Каменск-Уральский', 'Красноуфимск', 'Нефтеюганск', 'Нижний Тагил', 'Новоуральск', 'Новый Уренгой', ' Ноябрьск', 'Нижневартовск', 'Озёрск', 'Первоуральск', 'Пермь', 'Сургут ', ' Тобольск', 'Тюмень', 'Ханты-Мансийск', 'Чайковский', 'Челябинск ',],

    Ermak: ['Ангарск', 'Ачинск', 'Бердск', 'Братск', 'Железногорск ', 'Иркутск', 'Кызыл', 'Междуреченск', 'Нефтеюганск', 'Нижневартовск', 'Новосибирск', ' Новый Уренгой', 'Ноябрьск', 'Прокопьевск', 'Сургут', 'Улан-Удэ', 'Ханты - Мансийск', ' Чита', 'Якутск',],

    EKB: ['Берёзовский', 'Верхняя Пышма', 'Екатеринбург ', 'Каменск-Уральский', 'Красноуфимск ', 'Нефтеюганск', 'Нижний Тагил', 'Новоуральск', 'Новый Уренгой', 'Ноябрьск', 'Первоуральск', ' Сургут', 'Тобольск', 'Тюмень', 'Ханты-Мансийск', 'Нижневартовск',],


}

let FCO = document.querySelector('.FCO')
let Povolzie = document.querySelector('.Povolzie')
let Crimea = document.querySelector('.Crimea')
let Krasnodar = document.querySelector('.Krasnodar')
let RostovOnDon = document.querySelector('.RostovOnDon')
let Vostok = document.querySelector('.Vostok')
let Tatarstan = document.querySelector('.Tatarstan')
let Yuzhnyy_Ural = document.querySelector('.Yuzhnyy_Ural')
let Severo_Zapad = document.querySelector('.Severo_Zapad')
let Sibir = document.querySelector('.Sibir')
let Uralo_Sibirskiy = document.querySelector('.Uralo_Sibirskiy')
let Ermak = document.querySelector('.Ermak')
let UrFO = document.querySelector('.UrFO')
let EKB = document.querySelector('.EKB')


onCity(citi.Vostok, Vostok)
onCity(citi.Povolzie, Povolzie)
onCity(citi.Severo_Zapad, Severo_Zapad)
onCity(citi.Tatarstan, Tatarstan)
onCity(citi.Uralo_Sibirskiy, Uralo_Sibirskiy)
onCity(citi.Krasnodar, Krasnodar)
onCity(citi.RostovOnDon, RostovOnDon)
onCity(citi.FCO, FCO)
onCity(citi.Sibir, Sibir)
onCity(citi.Yuzhnyy_Ural, Yuzhnyy_Ural)
onCity(citi.Crimea, Crimea)
onCity(citi.Ermak, Ermak)
onCity(citi.UrFO, UrFO)
onCity(citi.EKB, EKB)



function onCity(name, div) {
    for (let index = 0; index < name.length; index++) {
        let city = name[index]
        city = document.createElement('p');
        city.innerHTML = name[index]
        div.appendChild(city);
    }
    if (name.length > 8 && name.length < 24) {

        div.classList.add('two')
    }
    if (name.length > 25) {

        div.classList.add('for')
    }
    console.log(name.length);
}






// modal
$('.button').on('click', function (event) {
    let modal = $(this).attr('rel');
    $('.modal-wrapper-block').each(function () {
        if ($(this).attr('data-popup') === modal)
            $(this).fadeIn();
    });
});

$('.modal-wrapper-block').on('click', function (event) {
    if ($(event.target).is('.modal-close') || $(event.target).is('.modal-wrapper-block')) {
        $(this).fadeOut();
    }
    console.log(this);
});


$(document).keyup(function (event) {
    if (event.which == '27') {
        $('.modal-wrapper-block').fadeOut();
    }
});





