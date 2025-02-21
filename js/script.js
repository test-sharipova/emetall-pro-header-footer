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

//pro-options
document.querySelectorAll('.navigation button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        // Прокручиваем контейнер к целевому элементу
        const container = document.querySelector('.pro-options__wrapper');
        const scrollToPosition = targetElement.offsetLeft;

        container.scrollTo({
            left: scrollToPosition,
            behavior: 'smooth' // Плавная прокрутка
        });
      
        // Удаляем класс active у всех кнопок
        document.querySelectorAll('.navigation button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Добавляем класс active к текущей кнопке
        this.classList.add('active');
    });
});

//slider
// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 1,
//     freeMode: true,
//     watchSlidesProgress: true,
//     loop: true,
//     direction: "vertical",
//     effect: "fade",
//   });
//   var swiper2 = new Swiper(".mySwiper2", {
//     loop: true,
//     spaceBetween: 10,
//     mousewheel: true,
//     slidesPerView: 3,
//     direction: "vertical",
//     thumbs: {
//       swiper: swiper,
//     },
//     loop: true,
//   });

//ВАРИАНТ 2

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     slidesPerView: 3,
//     // freeMode: true,
//     watchSlidesProgress: true,
//     direction: "vertical",
//     mousewheel: true,
//     loop: true,
    
//   });
//   var swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween: 10,
//     direction: "vertical",
//     loop: true,
//     mousewheel: true,
//     slidesPerView: 1,
//     thumbs: {
//       swiper: swiper,
//     },
//   });
//   // Получаем все элементы с классом swiper-slide
//   const slides = document.querySelectorAll('.swiper-slide');

//   // Добавляем обработчик события клика для каждого слайда
//   slides.forEach(slide => {
//       slide.addEventListener('click', function() {
//           // Удаляем класс swiper-slide-active у всех слайдов
//           slides.forEach(s => s.classList.remove('swiper-slide-active'));
          
//           // Добавляем класс swiper-slide-active к текущему слайду
//           this.classList.add('swiper-slide-active');
//       });
//   });

  

// // Функция для обновления классов
// function updateActiveThumbClass() {
//     const slides = document.querySelectorAll('.swiper-slide');
    
//     slides.forEach(slide => {
//         // Удаляем класс thumb-active у всех слайдов
//         slide.classList.remove('swiper-slide-thumb-active');
//     });

//     // Находим активный слайд и добавляем ему класс thumb-active
//     const activeSlideIndex = swiper.activeIndex % slides.length; // Получаем индекс активного слайда
//     const activeSlide = slides[activeSlideIndex];
    
//     if (activeSlide) {
//         activeSlide.classList.add('swiper-slide-thumb-active');
//     }
// }

// // Инициализируем проверку при загрузке страницы
// updateActiveThumbClass();

// // Отслеживаем изменения активности слайдов
// swiper.on('slideChange', function () {
//     updateActiveThumbClass();
// });

//ВАРИАНТ 3
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    infinite: true,
    adaptiveHeight: true,
    speed: 400,
    // vertical: true
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    // centerMode: true,
    focusOnSelect: true,
    verticalSwiping: true,
    vertical: true,
    arrows: false,
    infinite: true,
    centerPadding: '60px',
    adaptiveHeight: true
  });
  const slider = $(".slider-nav");
  slider.on('wheel', (function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));