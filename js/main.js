function scrollSmooth() {
	const links = document.querySelectorAll('.js-menu a[href^="#"]');
	const linkLogo = document.querySelectorAll('.js-logoContainer a[href^="#"]');

	if (links.length) {

		function activeScroll(event) {
			event.preventDefault();
			const href = event.target.getAttribute('href');

			const section = document.querySelector(href);
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}

		links.forEach(link => {
			link.addEventListener('click', activeScroll);
		})
		linkLogo.forEach(link => {
			link.addEventListener('click', activeScroll);
		})
	}

}

function initAnimarScroll() {
	const scrollSections = document.querySelectorAll('.js-scroll');
	if (scrollSections.length) {
		const windowMetade = window.innerHeight * 0.5;

		function animaScroll() {
			scrollSections.forEach(section => {
				const sectionTop = section.getBoundingClientRect().top;
				const isSectionTop = (sectionTop - windowMetade) < 0;

				if (isSectionTop) {
					section.classList.add('ativo');
				} else {
					section.classList.remove('ativo');
				}
			});
		}
	}

	animaScroll();

	window.addEventListener('scroll', animaScroll)
}

function copyrightAge() {
	const copy = document.querySelector(".contatos__copyright");
	console.log(copy);

	const year = new Date().getFullYear();

	const copyrigth = `copyright <span
	style="display: inline-block; font-size: 14px; color: #ffffff; background: transparent; border-radius: 6px; padding: 0 5px; margin-bottom: -2px">©</span> ${year} Drogaria Dias - Todos os direitos reservados`;

	copy.innerHTML = copyrigth;
}

scrollSmooth();
initAnimarScroll();
copyrightAge();
