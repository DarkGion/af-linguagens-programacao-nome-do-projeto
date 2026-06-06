// Giovanni Leandro Lati - RA: 250870 
// Mateus Coêlho Cardoso - RA: 250855

const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensagem = document.querySelector('#mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha os campos obrigatórios.');
        } else {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            formulario.reset();
        }
    });
}

const btnTema = document.querySelector('#btnTema');

if (btnTema) {
    btnTema.addEventListener('click', function() {
        document.body.classList.toggle('tema-escuro');
    });
}