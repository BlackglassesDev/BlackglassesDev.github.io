<!DOCTYPE html><html class="dark" lang="en" style=""
	><head>
		<meta charset="utf-8" />
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<title>AESTHETE - Luxury Portfolio</title>
		<!-- Material Symbols -->
		<link
			href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
			rel="stylesheet"
		/>
		<!-- Google Fonts -->
		<link href="https://fonts.googleapis.com" rel="preconnect" />
		<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
		<link
			href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap"
			rel="stylesheet"
		/>
		<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
		<script id="tailwind-config">
			tailwind.config = {
				darkMode: 'class',
				theme: {
					extend: {
						colors: {
							'surface-dim': '#121414',
							'on-surface': '#e3e2e2',
							'surface-tint': '#c7c6c4',
							secondary: '#c8c6c5',
							'tertiary-fixed-dim': '#c9c6c5',
							'on-error-container': '#ffdad6',
							'secondary-fixed-dim': '#c8c6c5',
							'error-container': '#93000a',
							background: '#121414',
							'surface-container-high': '#292a2a',
							outline: '#8e918e',
							'primary-fixed': '#e3e2e0',
							'on-secondary-fixed-variant': '#474646',
							'surface-bright': '#383939',
							'on-secondary-container': '#bab8b7',
							'on-error': '#690005',
							'inverse-on-surface': '#2f3031',
							'primary-fixed-dim': '#c7c6c4',
							'primary-container': '#e3e2e0',
							'on-primary-container': '#646463',
							'on-secondary-fixed': '#1c1b1b',
							error: '#ffb4ab',
							'secondary-fixed': '#e5e2e1',
							'on-primary-fixed': '#1b1c1b',
							surface: '#121414',
							primary: '#ffffff',
							'on-tertiary-fixed-variant': '#474646',
							'on-tertiary-fixed': '#1c1b1b',
							'surface-variant': '#343535',
							'tertiary-container': '#e5e2e1',
							'on-primary': '#303130',
							'surface-container-highest': '#343535',
							tertiary: '#ffffff',
							'on-background': '#e3e2e2',
							'on-tertiary': '#313030',
							'on-primary-fixed-variant': '#464746',
							'surface-container-lowest': '#0d0e0f',
							'outline-variant': '#444845',
							'surface-container-low': '#1b1c1c',
							'inverse-surface': '#e3e2e2',
							'on-tertiary-container': '#656464',
							'inverse-primary': '#5e5e5d',
							'tertiary-fixed': '#e5e2e1',
							'on-secondary': '#313030',
							'on-surface-variant': '#c4c7c4',
							'secondary-container': '#4a4949',
							'surface-container': '#1f2020'
						},
						borderRadius: {
							DEFAULT: '0.25rem',
							lg: '0.5rem',
							xl: '0.75rem',
							full: '9999px'
						},
						spacing: {
							'margin-mobile': '20px',
							gutter: '24px',
							'container-max': '1440px',
							'section-gap': '160px',
							unit: '4px',
							'margin-desktop': '80px'
						},
						fontFamily: {
							'body-lg': ['Plus Jakarta Sans'],
							'display-lg': ['Bodoni Moda'],
							'headline-md': ['Bodoni Moda'],
							'headline-sm': ['Bodoni Moda'],
							'body-md': ['Plus Jakarta Sans'],
							'label-caps': ['Plus Jakarta Sans'],
							'display-lg-mobile': ['Bodoni Moda']
						},
						fontSize: {
							'body-lg': [
								'18px',
								{
									lineHeight: '1.6',
									letterSpacing: '0.01em',
									fontWeight: '400'
								}
							],
							'display-lg': [
								'72px',
								{
									lineHeight: '1.1',
									letterSpacing: '-0.02em',
									fontWeight: '600'
								}
							],
							'headline-md': [
								'32px',
								{
									lineHeight: '1.3',
									fontWeight: '500'
								}
							],
							'headline-sm': [
								'24px',
								{
									lineHeight: '1.4',
									fontWeight: '500'
								}
							],
							'body-md': [
								'16px',
								{
									lineHeight: '1.6',
									fontWeight: '400'
								}
							],
							'label-caps': [
								'12px',
								{
									lineHeight: '1',
									letterSpacing: '0.2em',
									fontWeight: '700'
								}
							],
							'display-lg-mobile': [
								'44px',
								{
									lineHeight: '1.2',
									letterSpacing: '-0.01em',
									fontWeight: '600'
								}
							]
						}
					}
				}
			};
		</script>
		<style>
			body {
				background-color: #050505;
			}
			.bg-marble-base {
				background-color: #050505;
				background-image: url('https://lh3.googleusercontent.com/aida/AEtjO1XmzV_-BZEpHCYRghY470DKT-OKA3u9p376YBHBZewbjNh81qpL6FdVXTn9uyTA4QEmIbkN2ja7U5QsjKTy_gUDPGN9JwXCx_0CkbEcEH129wqCH3a0ohlHU7OVjqed1TpLFCK75DnBv9Kp-F9MlF4dvYM0DGHcV5CQKGwQ-QVtw0FEgwWV-NKDM9TjzbEVH8Gfa3BfM2CBN1D8GHdK32Aep_pxEeBhpLC9o4EwQuYsMRIG6XSS_gH-DbLc');
				background-blend-mode: overlay;
				background-size: cover;
				background-attachment: fixed;
				background-position: center;
			}
			.glass-panel {
				background: rgba(18, 18, 18, 0.7);
				backdrop-filter: blur(40px);
				-webkit-backdrop-filter: blur(40px);
				border: 1px solid rgba(255, 255, 255, 0.05);
			}
			.glass-panel:hover {
				border-color: rgba(229, 228, 226, 0.2);
				background: rgba(18, 18, 18, 0.9);
			}
			.text-glow-silver {
				text-shadow: 0 0 10px rgba(229, 228, 226, 0.3);
			}
			.border-glow-silver {
				box-shadow: 0 1px 0 0 #e5e4e2;
			}
			.nav-link {
				position: relative;
			}
			.nav-link::after {
				content: '';
				position: absolute;
				bottom: -4px;
				left: 0;
				width: 0%;
				height: 1px;
				background-color: #fff;
				transition: width 0.3s ease;
			}
			.nav-link:hover::after {
				width: 100%;
			}
			.portfolio-card-img {
				transition: transform 0.5s ease;
			}
			.glass-panel:hover .portfolio-card-img {
				transform: scale(1.05);
			}
		</style>
	</head>
	<body class="bg-marble-base overflow-x-hidden text-on-surface antialiased">
		<!-- TopNavBar -->
		<nav
			class="fixed top-4 left-1/2 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-container-max -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#121414]/50 px-6 py-4 font-label-caps text-label-caps backdrop-blur-[20px] md:top-6 md:px-10"
		>
			<div class="font-headline-sm text-headline-sm tracking-tighter text-on-surface">
				BlackglassesDev
			</div>
			<ul class="hidden items-center gap-gutter md:flex">
				<li class=""><a class="border-b border-primary pb-1 text-primary" href="#">Home</a></li>
				<li class="">
					<a
						class="text-on-surface-variant transition-colors duration-400 hover:text-primary"
						href="#about">About</a
					>
				</li>
				<li class="">
					<a
						class="text-on-surface-variant transition-colors duration-400 hover:text-primary"
						href="#works">Works</a
					>
				</li>
				<li class="">
					<a
						class="text-on-surface-variant transition-colors duration-400 hover:text-primary"
						href="#contact">Contact</a
					>
				</li>
			</ul>
			<a
				class="hidden items-center justify-center rounded-full bg-[#E5E4E2] px-6 py-3 font-label-caps text-label-caps font-bold tracking-[0.2em] text-[#050505] uppercase transition-all duration-400 hover:border hover:border-[#E5E4E2] hover:bg-transparent hover:text-[#E5E4E2] md:inline-flex"
				href="#"
				onclick="event.preventDefault(); document.getElementById('download-modal').classList.remove('hidden')"
			>
				Download</a
			>
			<!-- Mobile Menu Icon (simplified for layout) -->
			<button class="text-on-surface md:hidden">
				<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 0;"
					>menu</span
				>
			</button>
		</nav>
		<main class="pt-[140px] md:pt-[180px]">
			<!-- Hero Section -->
			<section
				class="relative mx-auto mb-section-gap flex min-h-[70vh] max-w-container-max flex-col items-start justify-center px-margin-mobile md:px-margin-desktop"
			>
				<div class="relative z-10 w-full md:w-8/12">
					<h1
						class="mb-8 font-display-lg-mobile text-display-lg-mobile leading-tight tracking-tight text-primary md:font-display-lg md:text-display-lg"
					>
						Creative Developer <br /><span class="font-light text-surface-tint italic"
							>&amp; Designer</span
						>
					</h1>
					<p class="mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
						Crafting elevated digital experiences with precision. Specializing in SvelteKit
						architecture and bespoke Tailwind CSS styling for luxury brands and executive
						portfolios.
					</p>
					<div class="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
						<a
							class="inline-flex items-center justify-center rounded-full border border-transparent bg-[#E5E4E2] px-8 py-4 font-label-caps text-label-caps font-bold tracking-[0.2em] text-[#050505] uppercase transition-all duration-400 hover:border-[#E5E4E2] hover:bg-transparent hover:text-[#E5E4E2]"
							href="#works"
						>
							View Works
						</a>
						<a
							class="inline-flex items-center gap-2 rounded-full px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] text-on-surface uppercase transition-colors duration-400 hover:bg-white/5 hover:text-primary"
							href="#contact"
						>
							Contact Me <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
						</a>
					</div>
				</div>
				<!-- Abstract Deco Element -->
				<div
					class="absolute top-1/2 right-margin-desktop hidden w-1/3 -translate-y-1/2 opacity-30 lg:block"
				>
					<div
						class="aspect-square w-full rounded-full bg-cover bg-center blur-[80px]"
						data-alt="A striking abstract digital art piece featuring geometric silver and black marble shapes floating in a void. High contrast, sharp edges, luxury aesthetic, soft dramatic lighting reflecting off metallic surfaces. Minimalist and elegant composition."
						style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBtP0J7Db0crK1EMWBnBGkzEyNcZpbzeId4Lv7ihsj1PHW9XUeEe4J2YF55UlOPONq09U5cWvyU1jj6L9WU0V6S2ZuHLuHjsCd5Y6suDaHWE61aN5vFweF_Bas-jYlmZm2DSeIJteVfem9pTCOcoFOu2JDGcBWW6EZobxwX8KEyngxnF5j969boZ0MFQIVH94_n8VX_1x8LRmMK5reFd_APmp7SLkpCZcs1F_s-9uudOrXpu5pfKVzAxw&quot;);"
					></div>
				</div>
			</section>
			<!-- Featured Works Section -->
			<section
				class="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop"
				id="works"
			>
				<div class="mb-16 flex items-end justify-between border-b border-white/10 pb-8">
					<h2 class="font-headline-md text-headline-md text-primary">Featured Works</h2>
					<a
						class="hidden items-center gap-2 rounded-full px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] text-on-surface-variant uppercase transition-colors duration-400 hover:bg-white/5 hover:text-primary md:inline-flex"
						href="#"
					>
						All Projects <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
					</a>
				</div>
				<div class="grid grid-cols-1 gap-gutter md:grid-cols-12">
					<!-- Project 1 (Spans 8 cols) -->
					<article class="group cursor-pointer md:col-span-8">
						<div class="glass-panel relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl">
							<img
								class="portfolio-card-img h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
								data-alt="A high-end website mockup displayed on a sleek monitor. The website features a dark mode, minimalist luxury fashion aesthetic with sharp typography and high-contrast photography. Silver accents and subtle glow effects. Professional editorial layout."
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPf_wnvv1wVXdyw1EriZoUxovHGA2lRGsFHZKopY_IFie5dhkjO69ksZekmKNmcdUuOFs9uJ2QL_o-Qntd9Kq73HuyKANGO1sb0IsdkQiWBX8_tolIlSdobxBk26sxNldjG3Vy2UEtNOsaBgcY-MyfjaaPlv5JlwcvhMz5l4kaQ19vgU6jdGc7dLSTXOb-LsN7G6O7iHFaBWT9EhCs6Q_RlhnyfBhzu_CIWw5yIHACPvsMfYQ3nzU1xQ"
							/>
						</div>
						<div class="flex items-start justify-between">
							<div>
								<h3
									class="mb-2 font-headline-sm text-headline-sm text-primary transition-all group-hover:text-glow-silver"
								>
									Vogue Atelier
								</h3>
								<p class="font-body-md text-body-md text-on-surface-variant">E-Commerce Redesign</p>
							</div>
							<span
								class="inline-block rounded-full border border-white/20 bg-[#050505] px-4 py-1.5 font-label-caps text-[10px] tracking-[0.2em] text-on-surface uppercase"
								>SvelteKit</span
							>
						</div>
					</article>
					<!-- Project 2 (Spans 4 cols, offset layout) -->
					<article class="group cursor-pointer md:col-span-4 md:mt-24">
						<div class="glass-panel relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl">
							<img
								class="portfolio-card-img h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
								data-alt="A sleek mobile app interface mockup presented on a modern smartphone. The app displays a luxury real estate portfolio with a dark theme, utilizing deep blacks, silver typography, and high-quality architectural photography. Minimalist UI elements."
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiKC11asCRJim7y36-FJ4KSu10jNoajUzi_kVOgn_vhxqp1q8aJ-0zKBGnhIGiOUYXroxbEdHF_Zpe3kRav4coTY1AvbDnozG5Pwk6oymJKIiW0lp9xaJvkEn-To9qb1NMYo3SVqETcmglrSO4_NqkEZVVxqxPToUevvpiQrntk8M4-N6AHxvf5kbyPQpp5-HJJ2UEsLn6UJShbJrexIzMYS1Nuu6zZsmWxJcAvvbIwjXGa8AcqKEzEg"
							/>
						</div>
						<div class="flex items-start justify-between">
							<div>
								<h3
									class="mb-2 font-headline-sm text-headline-sm text-primary transition-all group-hover:text-glow-silver"
								>
									Aura Residencies
								</h3>
								<p class="font-body-md text-body-md text-on-surface-variant">Mobile Application</p>
							</div>
						</div>
					</article>
					<!-- Project 3 (Spans 12 cols, wide format) -->
					<article class="group mt-16 cursor-pointer md:col-span-12 md:mt-32">
						<div class="glass-panel relative mb-6 aspect-[21/9] overflow-hidden rounded-2xl">
							<img
								class="portfolio-card-img h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
								data-alt="A sprawling, wide-format digital dashboard interface for a wealth management firm. Dark mode, sophisticated data visualizations with fine silver lines and subtle gradients on a deep black background. Elegant serif typography for key metrics."
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJtFyiHni80t9C5zAIVyHOKbfgyLMafb8ehTJYjRnh18CG0TaW4c4grCnPVK2aA-ChvymltV9NcBYn7XkucerOfuHc_Ke04IL79ztMIEmyHnS0bypcDR3jiSUOuN_iKBh61H01Z8pjRmHHcSfFKFMk08mmaP3b1Twufs-cXKvrAywksLtIIj4IrF0hqJlNkIKY_h403t5eiOzVyq4d-SmzaM1SPRopBy46xLcDQmfo6udZscj6NrhNUw"
							/>
						</div>
						<div class="flex items-start justify-between md:w-1/2">
							<div>
								<h3
									class="mb-2 font-headline-sm text-headline-sm text-primary transition-all group-hover:text-glow-silver"
								>
									Equinox Wealth
								</h3>
								<p class="font-body-md text-body-md text-on-surface-variant">
									Client Dashboard Architecture
								</p>
							</div>
							<div class="flex gap-2">
								<span
									class="inline-block rounded-full border border-white/20 bg-[#050505] px-4 py-1.5 font-label-caps text-[10px] tracking-[0.2em] text-on-surface uppercase"
									>Tailwind</span
								>
							</div>
						</div>
					</article>
				</div>
			</section>
		</main>
		<!-- Footer -->
		<footer
			class="w-full border-t border-outline-variant bg-surface-container-lowest py-8 font-label-caps text-label-caps"
		>
			<div
				class="mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 px-margin-mobile md:flex-row md:px-margin-desktop"
			>
				<div
					class="mb-4 font-body-md text-body-md font-bold tracking-[0.2em] text-on-surface md:mb-0"
				>
					AESTHETE
				</div>
				<div
					class="mb-4 text-center text-[10px] text-on-surface-variant opacity-80 md:mb-0 md:text-left"
				>
					© 2024 AESTHETE. ALL RIGHTS RESERVED.
				</div>
				<ul class="flex gap-8 text-[10px]">
					<li class="">
						<a
							class="text-on-surface-variant transition-all duration-400 hover:text-primary hover:opacity-80"
							href="#">LinkedIn</a
						>
					</li>
					<li class="">
						<a
							class="text-on-surface-variant transition-all duration-400 hover:text-primary hover:opacity-80"
							href="#">Dribbble</a
						>
					</li>
					<li class="">
						<a
							class="text-on-surface-variant transition-all duration-400 hover:text-primary hover:opacity-80"
							href="#">Behance</a
						>
					</li>
				</ul>
			</div>
		</footer>
		<div
			class="fixed inset-0 z-50 flex hidden items-center justify-center p-4 md:p-0"
			id="download-modal"
		>
			<div
				class="absolute inset-0 bg-[#050505]/80 backdrop-blur-[20px]"
				onclick="document.getElementById('download-modal').classList.add('hidden')"
			></div>
			<div
				class="glass-panel relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-surface-container-lowest shadow-2xl"
			>
				<div class="flex items-center justify-between border-b border-white/10 p-6">
					<h2 class="font-headline-md text-headline-md text-primary">Download Documents</h2>
					<button
						class="text-on-surface-variant transition-colors hover:text-primary"
						onclick="document.getElementById('download-modal').classList.add('hidden')"
					>
						<span class="material-symbols-outlined">close</span>
					</button>
				</div>
				<div class="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
					<div
						class="group flex flex-col items-start rounded-xl border border-white/10 p-6 transition-all hover:border-[#E5E4E2]"
					>
						<span class="material-symbols-outlined mb-4 text-headline-md text-surface-tint"
							>picture_as_pdf</span
						>
						<h3 class="mb-2 font-headline-sm text-headline-sm text-primary">Full Portfolio</h3>
						<p class="mb-6 font-body-md text-body-md text-on-surface-variant">
							A curated selection of my finest architectural and digital design works.
						</p>
						<button
							class="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-[#E5E4E2] py-3 font-label-caps text-label-caps font-bold tracking-[0.2em] text-[#050505] uppercase transition-all hover:bg-white"
						>
							Download <span class="material-symbols-outlined text-[18px]">download</span>
						</button>
					</div>
					<div
						class="group flex flex-col items-start rounded-xl border border-white/10 p-6 transition-all hover:border-[#E5E4E2]"
					>
						<span class="material-symbols-outlined mb-4 text-headline-md text-surface-tint"
							>description</span
						>
						<h3 class="mb-2 font-headline-sm text-headline-sm text-primary">Technical Resume</h3>
						<p class="mb-6 font-body-md text-body-md text-on-surface-variant">
							Detailed overview of my technical stack, experience, and education.
						</p>
						<button
							class="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-[#E5E4E2] py-3 font-label-caps text-label-caps font-bold tracking-[0.2em] text-[#050505] uppercase transition-all hover:bg-white"
						>
							Download <span class="material-symbols-outlined text-[18px]">download</span>
						</button>
					</div>
				</div>
			</div>
		</div></body
	></html
>
