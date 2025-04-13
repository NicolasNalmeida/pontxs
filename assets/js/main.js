function toggleForms(hideForm, showForm) {
    if (hideForm && showForm) {
        hideForm.style.opacity = '0'
        setTimeout(() => {
            hideForm.classList.add('hide')
            showForm.classList.add('show')
        }, 500);
    } else { console.error('Element not found:', hideForm, showForm) }
}

function stepOne(hide, show) {
    const hideForm = document.querySelector(`.login-form[data-step="${hide}"]`)
    const showeForm = document.querySelector(`.login-form[data-step="${show}"]`)
    
    this.toggleForms(hideForm, showeForm)
}

function modal(status) {
    var modal = document.querySelector('.modal')
    var close = document.querySelector('.close')
    var textMessage = document.querySelector('.modal .content .message')
    
    var arr = []

    if (status === true) {
        arr = [
            '<i class="icon success bi bi-check-lg"></i>',
            '<strong>Solicitação realizada com sucesso. Enviamos um link para o seu e-mail para o cadastro de uma nova senha.</strong>',
        ];
        modal.classList.remove('politica');     
    } else if(status === false) {
        carr = [
            '<i class="icon warning bi bi-exclamation-triangle-fill"></i>',
            '<strong>O dado informado não foi localizado. Por favor, entre em contato em Fale Conosco.</strong>',
            '<a class="info" href="javascript:;">Fale Conosco.<a>'
        ];
        modal.classList.remove('politica');
    } else if(status === 'modaltrue') {
        arr = [
            '<i class="icon success bi bi-check-lg"></i>',
            '<strong class="login-true">Redefinição de senha<br> realizada com sucesso.</strong>',
        ];
        modal.classList.remove('politica');
    } else if(status === 'politica') {
        arr = [
            '<h1>Política de Privacidade</h1>',
            '<h2>Na Pontxs é tudo muito claro!</h2>',
            '<p>Temos o compromisso com a privacidade, segurança e a qualidade nos produtos e serviços prestados para os participantes durante toda experiência de premiação em nosso site.</p>',
            '<p>Seus dados cadastrais não serão vendidos, trocados ou divulgados para terceiros, exceto quando essas informações são necessárias para o processo de entrega.</p>',
            '<p>Suas informações são essenciais para recebimento da premiação, na sua casa, com segurança e dentro do prazo proposto de entrega. Caso existam alterações na nossa politica de privacidade você será informado através de e-mails ou neste espaço.</p>',
        ]
        modal.classList.add('politica')
    }
    
    textMessage.innerHTML = arr.join(' ');
    modal.classList.add('show')
    
    close.addEventListener('click', function() {
        modal.classList.remove('show')
    });
}

function openModal(type) {
    if (type === 'comprar') {
        const modalContent = document.querySelector('.modal-comprar');
        modalContent.classList.add('show')
    } else if (type === 'termos') {
        const modalContent = document.querySelector('.modal-terms');
        modalContent.classList.add('show')
    } else if (type === 'confirm') {
        const modalContent = document.querySelector('.modal-confirm');
        modalContent.classList.add('show')
    }  else if (type === 'confirm-success') {
        const modalContent = document.querySelector('.modal-sucess');
        modalContent.classList.add('show')
        document.querySelector('.modal-confirm').classList.remove('show')
    } else if (type === 'extrato') {
        const modalContent = document.querySelector('.modal-extrato');
        modalContent.classList.add('show')
    } else if (type === 'address') {
        const modalContent = document.querySelector('.modal-new-address');
        modalContent.classList.add('show')
    }
}

function closeModal(type) {
    if (type === 'comprar') {
        const modalContent = document.querySelector('.modal-comprar');    
        modalContent.classList.remove('show')
    } else if (type === 'termos') {
        const modalContent = document.querySelector('.modal-terms');    
        modalContent.classList.remove('show')
    } else if (type === 'confirm') {
        const modalContent = document.querySelector('.modal-confirm');    
        modalContent.classList.remove('show')
    } else if (type === 'confirm-success') {
        const modalContent = document.querySelector('.modal-sucess');    
        modalContent.classList.remove('show')
    } else if (type === 'extrato') {
        const modalContent = document.querySelector('.modal-extrato');    
        modalContent.classList.remove('show')
    } else if (type === 'address') {
        const modalContent = document.querySelector('.modal-new-address');    
        modalContent.classList.remove('show')
    }
}

(function addCart() {
    const addItem = document.querySelector('.add-bag');
    const closeCart = document.querySelector('.add-cart .close')
    const cartModal = document.querySelector('.add-cart')

    if (addItem) {
        addItem.addEventListener('click', function() {
            cartModal.classList.add('show')
        })
    }

    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartModal.classList.remove('show')
        })
    }

    if (cartModal) {
        setTimeout(() => {
            cartModal.classList.remove('show')
        }, 5000);
    }
})();

function modalFirstAccess() {
    var modal = document.querySelector('.modal-first-access')
    var close = document.querySelector('.modal-first-access .close')  

    modal.classList.add('show');
    
    close.addEventListener('click', function() {
        modal.classList.remove('show')
    });
}

function openCloseMenu(action) {
    var menuContent = document.querySelector('.menu')

    if (action === 'open') {
        menuContent.classList.add('show')
    } else if (action === 'close') {
        menuContent.classList.remove('show')
    }
}

function openCloseDropdown(item) {
    var dropContent = item.closest('.link-item').nextElementSibling
    dropContent.classList.toggle('open')
}

(function slickInitBanners(){
    if (document.querySelector('.banner-main')) {
        $('.banner-main').slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle"></i></button>',
        });
    }

    if (document.querySelector('.carousel-category')) {
        $('.carousel-category').slick({
            infinite: false,
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        })
    }

    if (document.querySelector('.slick-filter')) {
        $('.slick-filter').slick({
            infinite: false,
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 610,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        })
    }

    if (document.querySelector('.products.carrossel')) {
        $('.products.carrossel').slick({
            infinite: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        })
    }

    if (document.querySelector('.grid-store')) {
        $('.grid-store').slick({
            infinite: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle-fill"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle-fill"></i></button>',
            responsive: [
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        })
    }

    if (document.querySelector('.grid-services')) {
        $('.grid-services').slick({
            infinite: false,
            dots: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2.2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1.2,
                    }
                }
            ]
        })
    }

    if (document.querySelector('.image-thumbnail')) {
        $('.image-thumbnail').slick({
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        })
    }
})();

(function openCategory() {
    var openFilter = document.querySelectorAll('.open-cat');

    openFilter.forEach(filter => {
        filter.addEventListener('click', function() {
            var content = document.getElementById(this.dataset.cat)
            content.classList.toggle('open')
            this.classList.toggle('rotate')
        })
    });
})();

(function productTabs() {
    var tabItem = document.querySelectorAll('.tab-item');
    var tabTextContent = document.querySelectorAll('.tab-content-item')

    tabItem.forEach(tab => {
        tab.addEventListener('click', function() {
            tabItem.forEach(tabRemove => {
                tabRemove.classList.remove('selected')
            });
            this.classList.add('selected')

            tabTextContent.forEach(content => {
                content.classList.remove('selected')
            });

            const contentTab = document.getElementById(this.dataset.id)

            contentTab.classList.add('selected')
        })
    });
})();

(function profileTabs() {
    var tabItem = document.querySelectorAll('.profile-item');
    var tabTextContent = document.querySelectorAll('.form-profile')

    tabItem.forEach(tab => {
        tab.addEventListener('click', function() {
            tabItem.forEach(element => {
                element.classList.remove('selected')
            });

            this.classList.add('selected')

            tabItem.forEach(tabRemove => {
                tabRemove.classList.remove('show-form')
            });
            this.classList.add('show-form')

            tabTextContent.forEach(content => {
                content.classList.remove('show-form')
            });

            const contentTab = document.getElementById(this.dataset.id)

            contentTab.classList.add('show-form')
        })
    });
})();

(function extratoTabs() {
    var openColapse = document.querySelectorAll('.open-tab')
    var closeColapse = document.querySelectorAll('.close-tab')
    
    openColapse.forEach(el => {
        el.addEventListener('click', function() {
            const colapseTable = this.closest('.row').querySelector('.table-colapse')
            colapseTable.classList.add('open')

            this.style.opacity = '0'
            this.style.visibility = 'hidden'
        })
    });

    closeColapse.forEach(el => {
        el.addEventListener('click', function() {
            const colapseTable = this.closest('.row').querySelector('.table-colapse')
            colapseTable.classList.remove('open')

            this.closest('.row').querySelector('.open-tab').style.opacity = '1'
            this.closest('.row').querySelector('.open-tab').style.visibility = 'visible'
        })
    });
})();

$(document).ready(function () {
    $('.input-range').each(function () {
        var value = $(this).attr('data-slider-value');
        var separator = value.indexOf(',');
        if (separator !== -1) {
            value = value.split(',');
            value.forEach(function (item, i, arr) {
                arr[i] = parseFloat(item);
            });
        } else {
            value = parseFloat(value);
        }
        $(this).slider({
            formatter: function (value) {
                return value;
            },
            min: parseFloat($(this).attr('data-slider-min')),
            max: parseFloat($(this).attr('data-slider-max')),
            range: $(this).attr('data-slider-range'),
            value: value,
            tooltip_split: $(this).attr('data-slider-tooltip_split'),
            tooltip: $(this).attr('data-slider-tooltip')
        });
    });
});