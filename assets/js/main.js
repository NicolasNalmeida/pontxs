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

function modalFirstAccess() {
    var modal = document.querySelector('.modal-first-access')
    var close = document.querySelector('.modal-first-access .close')

    console.log(modal)    

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
    $('.banner-main').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-circle"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-circle"></i></button>',
    });

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
})()