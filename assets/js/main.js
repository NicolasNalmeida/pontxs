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
    var modal = document.querySelector('.modal');
    var close = document.querySelector('.close');
    var textMessage = document.querySelector('.modal .content .message');
    
    var arr = [];    

    if (status) {
        arr = [
            '<i class="icon success bi bi-check-lg"></i>',
            '<strong>Solicitação realizada com sucesso. Enviamos um link para o seu e-mail para o cadastro de uma nova senha.</strong>',
        ];        
    } else {
        arr = [
            '<i class="icon warning bi bi-exclamation-triangle-fill"></i>',
            '<strong>O dado informado não foi localizado. Por favor, entre em contato em Fale Conosco.</strong>',
            '<a class="info" href="javascript:;">Fale Conosco.<a>'
        ];
    }
    
    textMessage.innerHTML = arr.join(' ');
    modal.classList.add('show');
    
    close.addEventListener('click', function() {
        modal.classList.remove('show');
    });
}