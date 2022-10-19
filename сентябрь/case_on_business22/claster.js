const citi = {
    FCO: ['Балашиха', 'Белгород', 'Борисоглебск', 'Брянск', 'Видное', 'Владимир', 'Воронеж', 'Воскресенск', 'Дмитров', 'Долгопрудный', 'Домодедово', 'Дубна', 'Егорьевск', 'Елец', 'Железнодорожный', 'Жуковский', 'Зеленоград', 'Иваново', 'Калуга', 'Клин', 'Ковров', 'Коломна', 'Королев', 'Кострома', 'Красногорск', 'Курск', 'Липецк', 'Лиски', 'Лобня', 'Люберцы', 'Мичуринск', 'Москва', 'Муром', 'Мытищи', 'Наро-Фоминск', 'Нововоронеж', 'Новомосковск', 'Ногинск', 'Обнинск', 'Одинцово', 'Орел', 'Орехово-Зуево', 'Подольск', 'Пушкино', 'Раменское', 'Реутов', 'Россошь', 'Рыбинск', 'Рязань', 'Сергиев Посад', 'Серпухов', 'Смоленск', 'Солнечногорск', 'Старый Оскол', 'Ступино', 'Тамбов', 'Тверь', 'Тула', 'Фрязино', 'Химки', 'Чехов', 'Щелково', 'Электросталь', 'Ярославль'],

    Povolzie: ['Альметьевск', 'Арзамас', 'Воткинск', 'Выкса', ' Глазов', 'Дзержинск', 'Димитровград', 'Ижевск', 'Йошкар-Ола', 'Казань', 'Киров', 'Кстово', 'Нижнекамск', 'Новокуйбышевск', 'Самара', 'Сарапул', 'Саров', 'Сызрань', ' Ульяновск', 'Чебоксары', 'Нижний Новгород', ' Набережные Челны', 'Пенза', 'Саранск', 'Саратов', 'Сызрань', 'Тольятти', 'Ульяновск', 'Энгельс'],

    Crimea: ['Керчь', 'Крым', 'Севастополь', 'Симферополь', ' Ялта',],

    Krasnodar: ['Армавир', 'Астрахань', 'Волгоград', 'Волжский', 'Ейск', 'Ессентуки', 'Камышин', 'Кисловодск', 'Краснодар', 'Кропоткин', 'Майкоп', 'Махачкала', ' Минеральные', 'Воды', 'Невинномысск', 'Новороссийск', 'Пятигорск', 'Сочи', 'Ставрополь',],

    RostovOnDon: ['Азов', 'Астрахань', 'Батайск', 'Владикавказ', 'Волгоград', 'Волгодонск', 'Волжский', 'Грозный', 'Ейск', 'Ессентуки', 'Камышин', ' Кисловодск', 'Нальчик', 'Невинномысск', 'Новочеркасск', 'Ставрополь', 'Таганрог', ' Черкесск', 'Шахты', 'Элиста', 'Каменск-Шахтинский', 'Ростов-на-Дону', 'Минеральные Воды',],

    Vostok: ['Благовещенск', 'Владивосток', 'Находка', 'Уссурийск', 'Хабаровск', 'Якутск', 'Комсомольск-на-Амуре', 'Петропавловск-Камчатский', 'Южно-Сахалинск',],

    Tatarstan: ['Альметьевск', 'Йошкар-Ола', 'Казань', 'Набережные Челны', 'Нижнекамск',],

    Yuzhnyy_Ural: ['Златоуст', 'Курган', 'Магнитогорск', 'Миасс', 'Озёрск', 'Тобольск', 'Челябинск'],

    Severo_Zapad: ['Апатиты', 'Архангельск  ', 'Вологда', 'Всеволожск', 'Выборг', 'Гатчина', 'Калининград', 'Колпино', 'Котлас', ' Мурманск', 'Петрозаводск', 'Псков', 'Пушкин', 'Северодвинск', 'Сыктывкар', 'Ухта', 'Череповец', ' Сосновый Бор', 'Великие Луки', 'Великий Новгород', 'Санкт-Петербург',],

    Sibir: ['Абакан', 'Ангарск', 'Ачинск', 'Барнаул ', 'Бердск', 'Бийск', 'Братск', 'Железногорск ', 'Иркутск', 'Кемерово', 'Красноярск', 'Кызыл', 'Междуреченск', ' Новокузнецк', 'Новосибирск', 'Омск', 'Прокопьевск', 'Рубцовск', 'Северск', 'Томск', 'Улан-Удэ',
        'Чита', 'Ленинск-Кузнецкий',],

    Uralo_Sibirskiy: ['Златоуст', 'Курган ', 'Магнитогорск', 'Миасс', 'Нефтекамск', 'Озёрск', 'Октябрьский', 'Омск', ' Салават', 'Стерлитамак', 'Тобольск ', 'Тюмень', 'Уфа', 'Челябинск',],

    UrFO: ['Березники', 'Березовский', 'Верхняя Пышма', 'Екатеринбург', 'Златоуст ', 'Каменск-Уральский', 'Красноуфимск', 'Нефтеюганск', 'Нижний Тагил', 'Новоуральск', 'Новый Уренгой', ' Ноябрьск', 'Нижневартовск', 'Озёрск', 'Первоуральск', 'Пермь', 'Сургут ', ' Тобольск', 'Тюмень', 'Ханты-Мансийск', 'Чайковский', 'Челябинск ',],


    EKB: ['Берёзовский', 'Верхняя Пышма', 'Екатеринбург ', 'Каменск-Уральский', 'Красноуфимск ', 'Нефтеюганск', 'Нижний Тагил', 'Новоуральск', 'Новый Уренгой', 'Ноябрьск', 'Первоуральск', ' Сургут', 'Тобольск', 'Тюмень', 'Ханты-Мансийск', 'Нижневартовск',],

    priyralie: ['Березники', 'Воткинск', 'Глазов ', 'Ижевск', 'Красноуфимск ', 'Киров', 'Нефтекамск', 'Новотроицк', 'Октябрьский', 'Оренбург', 'Орск', 'Пермь', ' Салават', 'Сарапул', 'Стерлитамак', 'Уфа', 'Чайковский',],

    ural: ['Екатеринбург', 'Челябинск', 'Сургут ', 'Тюмень', 'Ханты- Мансийск ', 'Нижний тагил', 'Курган', 'Новый Уренгой', 'Магнитогорск', 'Берёзовский', 'Верхняя Пышма', ' Златоуст', 'Каменск - Уральский', 'Красноуфимск', 'Миасс', 'Нефтеюганск', 'Нижневартовск', 'Новоуральск', 'Ноябрьск', 'Озерск', 'Первоуральск', 'Тобольск'],

    ug_Krim: ['Азов', 'Армавир', 'Астрахань ', 'Батайск', 'Владикавказ ', 'Волгоград', 'Волгодонск', 'Волжский', 'Грозный', 'Ейск', 'Ессентуки', ' Каменск- Шахтинский', 'Камышин', 'Керчь', 'Кисловодск', 'Краснодар', 'Кропоткин', 'Крым', 'Майкоп', 'Махачкала', 'Минеральные Воды', 'Нальчик',
        'Невинномысск', 'Новороссийск', 'Новочеркасск', 'Пятигорск', 'Ростов - на - Дону', 'Севастополь', 'Симферополь', 'Сочи', 'Ставрополь', 'Черкесск', 'Шахты', 'Элиста', 'Ялта',],

    by: ['Брест', 'Витебск', 'Гомель ', 'Гродно', 'Минск ', 'Могилев',],


    ua: ['Винница', 'Днепропетровск', 'Донецк ', 'Житомир', 'Запорожье ', 'Ивано- Франковск', 'Киев', 'Кировоград', 'Кривой Рог', 'Луганск', 'Луцк', 'Львов', 'Николаев', 'Одесса', 'Полтава', 'Ровно', 'Сумы', 'Тернополь', 'Ужгород', 'Харьков', 'Херсон', 'Хмельницкий', 'Черкассы', 'Чернигов', 'Черновцы',],

    kz: ['Актау', 'Актобе', 'Алматы ', 'Нур- Султан(Астана)', 'Атырау ', 'Караганда', 'Костанай', 'Павлодар', 'Петропавловск', 'Уральск', 'Усть - Каменогорск', 'Шымкент',],


}

let Vostok = document.querySelector('.Vostok')
let FCO = document.querySelector('.FCO')
let Povolzie = document.querySelector('.Povolzie')
let priyralie = document.querySelector('.priyralie')
let ural = document.querySelector('.ural')
let ug_Krim = document.querySelector('.ug_Krim')
let by = document.querySelector('.by')
let ua = document.querySelector('.ua')
let kz = document.querySelector('.kz')

let Crimea = document.querySelector('.Crimea')
let Krasnodar = document.querySelector('.Krasnodar')
let RostovOnDon = document.querySelector('.RostovOnDon')

let Tatarstan = document.querySelector('.Tatarstan')
let Yuzhnyy_Ural = document.querySelector('.Yuzhnyy_Ural')
let Severo_Zapad = document.querySelector('.Severo_Zapad')
let Sibir = document.querySelector('.Sibir')
let Uralo_Sibirskiy = document.querySelector('.Uralo_Sibirskiy')
let UrFO = document.querySelector('.UrFO')
let EKB = document.querySelector('.EKB')



onCity(citi.Uralo_Sibirskiy, Uralo_Sibirskiy)
// onCity(citi.Povolzie, Povolzie)
// onCity(citi.priyralie, priyralie)
// onCity(citi.Severo_Zapad, Severo_Zapad)
// onCity(citi.ural, ural)
// onCity(citi.FCO, FCO)
// onCity(citi.ug_Krim, ug_Krim)
// onCity(citi.Sibir, Sibir)
// onCity(citi.by, by)
// onCity(citi.ua, ua)
// onCity(citi.kz, kz)



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
}