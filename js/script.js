//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//popup с отзывами
const elements = [
    { 
        title: "МеталлИнвест", 
        description: 
            ' <div class="popup__raiting"><span>5</span><img src="img/5star.svg" alt="пять звезд" width="89" height="14"><p class="pro-rew__date">2 февраля</p></div><p class="popup__text">Поиск и покупка металла еще никогда не были настолько удобным и продуманным. Заниматься организацией поставок, требуемых для функционирования компании материалов стало значительно проще.<br><br>Поиск и покупка металла еще никогда не были настолько удобным и продуманным. Заниматься организацией поставок, требуемых для функционирования компании материалов стало значительно проще.</p><div class="popup__raiting__item"><p class="popup__raiting__item__text">Удобство пользования</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Расширенная база металлопроката</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Актуальность информации</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Стоимость подписки</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__name">Иванов. А<span>Генеральный директор</span></div>'
         
    },
    { 
        title: "МеталлТорг", 
        description: 
            '<div class="popup__raiting"><span>5</span><img src="img/5star.svg" alt="пять звезд" width="89" height="14"><p class="pro-rew__date">10 февраля</p></div><p class="popup__text">Поиск и покупка металла еще никогда не были настолько удобным и продуманным. Заниматься организацией поставок, требуемых для функционирования компании материалов стало значительно проще.<br><br>Поиск и покупка металла еще никогда не были настолько удобным и продуманным. Заниматься организацией поставок, требуемых для функционирования компании материалов стало значительно проще.</p><div class="popup__raiting__item"><p class="popup__raiting__item__text">Удобство пользования</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Расширенная база металлопроката</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Актуальность информации</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Стоимость подписки</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__name">Иванов. А<span>Генеральный директор</span></div>'
         
    },
    { 
        title: "Сибнефтемаш", 
        description: 
           '<div class="popup__raiting"><span>5</span><img src="img/5star.svg" alt="пять звезд" width="89" height="14"><p class="pro-rew__date">7 февраля</p></div><p class="popup__text">Поиск и покупка металла еще никогда не были настолько удобным и продуманным. Заниматься организацией поставок, требуемых для функционирования компании материалов стало значительно проще.<br><br>Поиск и покупка металла еще никогда не были настолько удобным и продуманным. Заниматься организацией поставок, требуемых для функционирования компании материалов стало значительно проще.</p><div class="popup__raiting__item"><p class="popup__raiting__item__text">Удобство пользования</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Расширенная база металлопроката</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Актуальность информации</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__raiting__item"><p class="popup__raiting__item__text">Стоимость подписки</p><img src="img/5star.svg" alt="пять звезд" width="89" height="14"></div><div class="popup__name">Иванов. А<span>Генеральный директор</span></div>'
         
    }
];

let currentIndex = null;

const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('click', () => {
        currentIndex = parseInt(element.dataset.index);
        showPopup(currentIndex);
        document.body.style.top = `-${window.scrollY}px`;
        if (document.documentElement.clientWidth < 525) {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        }
    });
});

closeBtn.addEventListener('click', closePopup);
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));

function showPopup(index) {
    popupTitle.textContent = elements[index].title;
    popupDescription.innerHTML = elements[index].description; // Используем innerHTML
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
    
    if (document.documentElement.clientWidth < 525) {
        
        document.body.style.position = '';
        document.body.style.width = '';
    }
}

function navigate(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = elements.length - 1; // Зацикливаем на последний элемент
    } else if (currentIndex >= elements.length) {
        currentIndex = 0; // Зацикливаем на первый элемент
    }
    
    showPopup(currentIndex);
}
