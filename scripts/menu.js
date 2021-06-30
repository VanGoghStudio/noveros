'use strict'
document.addEventListener('DOMContentLoaded', function () {
    // map
    const openMenuBtn = document.querySelector('.open-map-btn'),
        closeMenuBtn = document.querySelector('.close-map-btn'),
        menuModal = document.querySelector('.map-wrap'),
        // hamb
        hambCategory = document.querySelector('.hamb-category'),
        hambLinks = document.querySelector('.hamb-links'),
        openHambBtn = document.querySelector('.open-hamb-btn'),
        closeHambBtn = document.querySelector('.close-hamb-btn'),
        hambModal = document.querySelector('.hamb-wrap'),
        closeHambMobBtn = document.querySelector('.close-hamb-mob-btn'),

        // search

        searchWrap = document.querySelector('.search-wrap'), 
        closeSearchBtn = document.querySelector('.close-search-btn'), 
        openSearchBtn = document.querySelector('.open-search-btn');

    // map
    if (openMenuBtn && menuModal) {
        let idOpen = openMenuBtn.addEventListener('click', () => {
            menuModal.classList.remove('hide');
            menuModal.classList.add('showFlex');
            let idClose = closeMenuBtn.addEventListener('click', () => {
                menuModal.classList.add('hide');
                menuModal.classList.remove('showFlex');
                openMenuBtn.removeEventListener('click', idOpen);
                closeMenuBtn.removeEventListener('click', idClose);
            })
        })
    }
    // hamb
    if (hambCategory && hambLinks) {
        let arrCategory = [{
                id: 'каталог',
                subtitle: ['Весь каталог', 'Мешки 50 КГ', 'МЕШКИ 50 КГ НА ПАЛЕТАХ ПО 1500 КГ', 'НАВАЛ', 'МЕШКИ 25 КГ', 'МЕШКИ 25 КГ НА ПАЛЕТАХ ПО 1400 КГ', 'МКР 1500 КГ']
            },
            {
                id: 'компания',
                subtitle: ['Вакансии', 'Тендеры', 'О компании', 'Контакты', 'Новости', 'Предложить идею по улучшению компании']
            },
            {
                id: 'покупателю',
                subtitle: ['Корзина', 'Доставка и оплата', 'Вход в личный кабинет', 'О компании', 'Контакты']
            },
            {
                id: 'пресс центр',
                subtitle: ['пресс релизы', 'новости', 'о компании']
            },
            {
                id: 'контакты',
                subtitle: [
                    'все контакты',
                    ['8 (8617) 79 52 92', 'red-text middle-text'],
                    ['secretary@novoroscement.ru', 'tiny-text lower-text'],
                    ['353902, Россия, Краснодарский край, г. Новороссийск, Сухумское шоссе, 60', 'small-text gray-text'],
                    ['ФАКС', 'little-text bottom-text'],
                    '8 (8617) 79 52 99'
                ]
            }
        ]

        function parseTitleInHTML(arr) {
            arr.forEach(item => {
                hambCategory.innerHTML += `<li class="column-footer__item column-footer__item_link hamb-category__item">
                                                <a href="#" class='hamb__link'>
                                                    ${item.id}
                                                </a>
                                            </li>`
            });
        }

        function parseLinksInHTML(arr, key) {
            let arrayWitchLinks = arr.find(item => Object.values(item).includes(key))
            hambLinks.innerHTML = '';
            arrayWitchLinks.subtitle.forEach(item => {
                if (typeof item !== 'object') {
                    hambLinks.innerHTML += `<li class="column-footer__item column-footer__item_link">
                                            <a href="#" class='hamb-links__item'>
                                               ${item}
                                            </a>
                                        </li>`
                } else {
                    hambLinks.innerHTML += `<li class="column-footer__item column-footer__item_link">
                                            <a href="#" class='hamb-links__item ${item[1]}'>
                                               ${item[0]}
                                            </a>
                                        </li>`
                }

            });
        }

        parseTitleInHTML(arrCategory)

        hambCategory.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;
            if (target.closest('.hamb-category__item')) {
                Array.from(document.querySelectorAll('.hamb__link')).forEach(item => {
                    item.classList.remove('red-text')
                })
                target.classList.add('red-text')
                let key = target.textContent.trim().toLowerCase();
                parseLinksInHTML(arrCategory, key)
            }
        })


        let openId = openHambBtn.addEventListener('click', (e) => {
            e.preventDefault();
            hambModal.classList.remove('hide');
            hambModal.classList.add('showFlex');
            let closeId = closeHambBtn.addEventListener('click', () => {
                hambModal.classList.add('hide');
                hambModal.classList.remove('showFlex');
                openHambBtn.removeEventListener('click', openId);
                closeHambBtn.removeEventListener('click', closeId);
            });
        })

    }
    // search
    if (searchWrap && closeSearchBtn){
        let idOpen = openSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchWrap.classList.remove('hide');
            searchWrap.classList.add('showFlex');
            let idClose = closeSearchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchWrap.classList.add('hide');
                searchWrap.classList.remove('showFlex');
                openSearchBtn.removeEventListener('click', idOpen);
                closeSearchBtn.removeEventListener('click', idClose);
            })
        })
    }

    let openMobId = closeHambMobBtn.addEventListener('click', () => {
        hambModal.classList.add('hide');
        hambModal.classList.remove('showFlex');
        openHambBtn.removeEventListener('click', openMobId);
    });

})