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
        openSearchBtnArr = document.querySelectorAll('.open-search-btn'),

        // catalog
        catalogOpenLink = document.querySelector('.catalog-links__item_catalog'),
        catalogOpenBtn = document.querySelector('.catalog-open-btn'),
        catalogCloseBtn = document.querySelector('.catalog-close-btn'),
        menuCatalog = document.querySelector('.hamb-catalog-menu');


    // catalog
    if(menuCatalog && catalogOpenLink){

        function openCloseCat(e){
            const target = e.target;
            if(target.closest('catalog-links__item_catalog') || !target.closest('.hamb-catalog-menu')){
                catalogOpenLink.classList.toggle('active');
                menuCatalog.classList.toggle('showFlex'); 
                menuCatalog.classList.toggle('hide'); 
                catalogOpenBtn.classList.toggle('dis-hide');          
                catalogCloseBtn.classList.toggle('dis-hide');
            }
        }

        catalogOpenLink.addEventListener('click', (e) => {
            e.stopPropagation();
            openCloseCat(e);
        })
        
    }

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
                subtitle: [
                    ['Весь каталог', 'catalog.html'],
                    ['Мешки 50 КГ', 'catalog.html'],
                    ['МЕШКИ 50 КГ НА ПАЛЕТАХ ПО 1500 КГ', 'catalog.html'],
                    ['НАВАЛ', 'catalog.html'],
                    ['МЕШКИ 25 КГ', 'catalog.html'],
                    ['МЕШКИ 25 КГ НА ПАЛЕТАХ ПО 1400 КГ', 'catalog.html'],
                    ['МКР 1500 КГ', 'catalog.html']
                ]
            },
            {
                id: 'компания',
                subtitle: [
                    ['Вакансии', 'vacancy.html'],
                    ['Тендеры', 'tenders.html'],
                    ['О компании', 'text-bg.html'],
                    ['Контакты', 'contact.html'],
                    ['Новости', 'news.html'],
                    ['Предложить идею по улучшению компании', 'idea.html']
                ]
            },
            {
                id: 'покупателю',
                subtitle: [
                    ['Корзина', ''],
                    ['Доставка и оплата', ''],
                    ['Вход в личный кабинет', ''],
                    ['О компании', 'text-bg.html'],
                    ['Контакты', 'contact.html']
                ]
            },
            {
                id: 'пресс центр',
                subtitle: [
                    ['пресс релизы', 'news.html'],
                    ['Новости', 'news.html'],
                    ['О компании', 'text-bg.html']
                ]
            },
            {
                id: 'контакты',
                subtitle: [
                    ['все контакты'],
                    ['8 (8617) 79 52 92', 'tel:8(617)795292', 'red-text middle-text'],
                    ['secretary@novoroscement.ru', 'mailto:secretary@novoroscement.ru', 'tiny-text lower-text'],
                    ['353902,  Россия, Краснодарский край, г. Новороссийск, Сухумское шоссе, 60', '#map', 'small-text gray-text'],
                    ['ФАКС', 'tel:8(617)795292', 'little-text bottom-text'],
                    ['8 (617) 79 52 99', 'tel:8(617)795292']
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
                                            <a href="${item[1]}" class='hamb-links__item ${item[2]}'>
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
            e.stopPropagation();
            let closeId = closeHambBtn.addEventListener('click', () => {
                hambModal.classList.add('hide');
                hambModal.classList.remove('showFlex');
                openHambBtn.removeEventListener('click', openId);
                closeHambBtn.removeEventListener('click', closeId);
            });
        })

    }
    // search
    if (searchWrap && closeSearchBtn) {
            openSearchBtnArr.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                searchWrap.classList.remove('hide');
                searchWrap.classList.add('showFlex');
                document.body.style.overflow = 'none';
                e.stopPropagation();
                closeSearchBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    searchWrap.classList.add('hide');
                    searchWrap.classList.remove('showFlex');
                })
            })
        })
        
    }

    let openMobId = closeHambMobBtn.addEventListener('click', () => {
        hambModal.classList.add('hide');
        hambModal.classList.remove('showFlex');
        openHambBtn.removeEventListener('click', openMobId);
    });

    // scroll
    $("a.scroll-to").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });

    $("a.scroll-top").on("click", function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 1
        }, 800);
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('#header').addClass('fixed');
        }
        else if ($(this).scrollTop()<0){
            $('#header').removeClass('fixed');
        }
    });

    $("a.scroll-map").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });

    // CATALOG CARD

    let cardCatalogArr = document.querySelectorAll('a.card-list__item');
    if(cardCatalogArr.length){
        let widthDevice = document.body.clientWidth;

        const cardOne = document.querySelector('.no-item-banner_one-column'), 
            cardTwo = document.querySelector('.no-item-banner_two-column'), 
            cardThree = document.querySelector('.no-item-banner_three-column');

        if(widthDevice > 1449){
            switch (cardCatalogArr.length % 5){
                case 1:
                    cardThree.classList.remove('hide');
                    cardOne.classList.remove('hide');
                    break;
                case 2:
                    cardTwo.classList.remove('hide');
                    cardOne.classList.remove('hide');
                    break;
                case 3: 
                    cardTwo.classList.remove('hide');
                    break;
                default:
                    break;
            }
        }else if((widthDevice > 1100 && widthDevice < 1450) || (widthDevice < 993 && widthDevice > 759)){
            switch (cardCatalogArr.length % 4){
                case 1:
                    cardThree.classList.remove('hide');
                    break;
                case 2:
                    cardTwo.classList.remove('hide');
                    break;
                case 3: 
                    cardOne.classList.remove('hide');
                    break;
                default:
                    break;
            }
        }else if(widthDevice < 1101 && widthDevice >= 993){
            switch (cardCatalogArr.length % 3){
                case 1:
                    cardTwo.classList.remove('hide');
                    break;
                case 2:
                    cardOne.classList.remove('hide');
                    break;
                default:
                    break;
            }
        }
        
    }

})