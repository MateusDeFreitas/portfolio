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