<script>
	import { Logo, CloseIcon, OpenIcon, ArrowDown } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const openButton = document.querySelector('#open-modal');
		const closeButton = document.querySelector('#close-modal');
		const navLinks = document.querySelectorAll('nav a');
		const dropdownButton = document.querySelector('.projecten-btn');
		const dropdownContent = document.querySelector('.dropdown-content');
		const modal = document.querySelector('dialog');

		const isMobileView = () => window.matchMedia('(max-width: 56.25em)').matches;
		const isDesktopView = () => window.matchMedia('(min-width: 56.25em)').matches;

		if (openButton && modal) {
			openButton.addEventListener('click', () => {
				modal?.showModal();
			});
		}

		if (closeButton && modal) {
			closeButton.addEventListener('click', () => {
				modal?.close();
			});
		}

		if (modal && navLinks) {
			navLinks.forEach((link) => {
				link.addEventListener('click', () => {
					modal?.close();
				});
			});

			modal.addEventListener('keydown', (event) => {
				if (!isMobileView()) return;

				const firstLink = navLinks[0];
				const lastLink = navLinks[navLinks.length - 1];

				if (event.key === 'Tab') {
					if (document.activeElement === lastLink && !event.shiftKey) {
						event.preventDefault();

						closeButton.focus();
					}

					if (document.activeElement === closeButton && event.shiftKey) {
						event.preventDefault();

						lastLink.focus();
					}
				}
			});
		}

		if (dropdownButton && dropdownContent) {
			// Event handler om de dropdown te toggelen
			const handleDropdownToggle = (event) => {
				if (isDesktopView()) {
					event.preventDefault();
					dropdownContent.style.display =
						dropdownContent.style.display === 'block' ? 'none' : 'block';
				}
			};

			// Event handler voor focus verlies
			const handleFocusOut = (event) => {
				if (isDesktopView() && !dropdownContent.contains(event.relatedTarget)) {
					dropdownContent.style.display = 'none';
				}
			};

			// Event listeners voor dropdown acties
			dropdownButton.addEventListener('keydown', (event) => {
				if (event.key === 'Enter') handleDropdownToggle(event);
			});

			dropdownButton.addEventListener('click', handleDropdownToggle);
			dropdownContent.addEventListener('focusout', handleFocusOut);
		}
	});
</script>

<header>
	<div class="menu-container">
		<a href="/" aria-label="bieb in bloei logo">
			<Logo />
		</a>

		<button id="open-modal" aria-label="Open menu"><OpenIcon /></button>
	</div>

	<dialog>
		<button class="close-btn" id="close-modal" aria-label="Close menu"><CloseIcon /></button>
		<nav>
			<ul id="main-menu" role="menubar">
				<li role="menuitem"><a href="/">Home</a></li>
				<li class="dropdown">
					<button class="projecten-btn">Projecten <ArrowDown /></button>
					<ul class="dropdown-content">
						<li role="menuitem"><a href="/stekjes">Stekjes</a></li>
						<li role="menuitem"><a href="/zaden">Zaden</a></li>
						<li role="menuitem"><a href="/geveltuin">Geveltuin</a></li>
						<li role="menuitem"><a href="/groenebieb">Groenebieb</a></li>
					</ul>
				</li>
				<li role="menuitem"><a href="/agenda">Workshops</a></li>
				<li role="menuitem"><a href="/partners">Partners</a></li>
				<li role="menuitem"><a href="/over">Over</a></li>
				<li role="menuitem"><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</dialog>
</header>

<style>
	/* MENU STYLING */
	header {
		z-index: 1000;
		width: 100%;
		position: absolute;
	}

	.menu-container {
		height: 8em;
		display: flex;
		margin-top: -2rem;
		padding: 1em 2.5em;
		align-items: center;
		justify-content: space-between;
	}

	button {
		border: none;
		background: none;
		background-position: center;
	}

	/* DROPDOWN MENU STYLING */
	#open-modal {
		display: block;
	}

	dialog {
		inset: 0;
		top: 0rem;
		width: 100%;
		height: auto;
		border: none;
		display: none;
		box-shadow: none;
		background: var(--main-color-beige);
	}

	dialog::backdrop {
		background-color: var(--main-color-beige);
	}

	dialog[open] {
		display: flex;
		position: fixed;
		margin-left: 1rem;
		align-items: center;
		line-height: 2.5rem;
		justify-content: center;
	}

	dialog button#close-modal {
		top: 2rem;
		right: 0rem;
		border: none;
		cursor: pointer;
		background: none;
		position: absolute;
	}

	.projecten-btn {
		display: none;
	}

	ul {
		list-style: none;
	}

	ul:first-child {
		font-size: 4em;
	}

	a {
		font-size: 0.4em;
		text-decoration: none;
		font-family: var(--link-font);
		color: var(--main-color-green);
	}

	a:hover {
		color: var(--main-color-orange);
	}

	/* MEDIA QUERY */
	/* DESKTOP */
	@media (min-width: 56.25em) {
		header {
			height: 8em;
			display: flex;
			padding: 1em 2.5em;
			align-items: center;
			justify-content: space-between;
		}

		#open-modal {
			display: none;
		}

		dialog {
			padding: 0;
			width: auto;
			height: auto;
			display: flex;
			position: static;
			background: none;
			align-items: center;
			justify-content: flex-end;
		}

		dialog .close-btn {
			display: none;
		}

		.dropdown {
			position: relative;
			display: inline-block;
		}

		.dropdown-content {
			left: 50%;
			z-index: 1;
			display: none;
			padding: 2rem;
			font-size: small;
			line-height: 4em;
			position: absolute;
			border-radius: 0.5rem;
			transform: translateX(-50%);
			background-color: var(--main-color-brown);
		}

		.dropdown:hover .dropdown-content {
			display: block;
		}

		.projecten-btn {
			gap: 0.2rem;
			cursor: pointer;
			font-size: 1.6rem;
			margin-top: 1.2rem;
			align-items: center;
			display: inline-flex;
			color: var(--text-color-white);
		}

		ul {
			gap: 0.5em;
			display: flex;
			font-size: 1.4em;
			flex-direction: row;
			align-items: center;
		}

		li {
			border-bottom: none;
		}

		#main-menu > li:first-child {
			display: none;
		}

		a {
			font-size: 1.6rem;
			text-decoration: none;
			color: var(--text-color-white);
		}
	}
</style>
