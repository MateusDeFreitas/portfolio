// Fução para controlar o segundo menu e apresentar os textos

const targets = document.querySelectorAll('.observar');
const segundoMenu = document.getElementById('segundoMenu');

function obeserverCallback(entries, observer) {
    entries.forEach(function(entry) {

        if(entry.isIntersecting) {
            if(entry.target.classList.contains('elementoQueSurge')) {
                entry.target.classList.add('surgir');
            }
            if(entry.target.classList.contains('header')) {
                segundoMenu.classList.add('segundoMenuDesativo');
            }
        } else {
            if(entry.target.classList.contains('header')) {
                segundoMenu.classList.remove('segundoMenuDesativo');
            }
        }
    });
}

const configuracoesObservador = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

const meuObservador = new IntersectionObserver(obeserverCallback, configuracoesObservador);

targets.forEach(function(target) {
    meuObservador.observe(target);
});


// Fução para controlar menu mobile

let menuAberto = false;

function expandirMenu() {
    /*
        Essa função expande e retrai o menu na versão ,obile do site
    */
    const menu = document.getElementById("espacoMenu");

    if (!menuAberto) {
        menu.classList.add('aberto');
    } else {
        menu.classList.remove('aberto');
    }

    menuAberto = !menuAberto;
}