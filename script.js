
        // Atualiza o ano no footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Lógica do Menu Mobile
        const menuBtn = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fechar menu ao clicar em um link (mobile)
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Simulação de envio de formulário
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você integraria com algum serviço de email (ex: Formspree)
            alert('Mensagem enviada com sucesso! (Esta é uma simulação)');
            contactForm.reset();
        });

        // Efeito de scroll na navbar
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
        });