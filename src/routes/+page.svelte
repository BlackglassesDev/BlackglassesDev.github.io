<script>
	import { resolve } from '$app/paths';
	import RMUTLSkillMapping from '../lib/assets/skillMappingRMUTL.png';
</script>

<main class="pt-[80px] md:pt-[10px]">
	<section
		id="about"
		class="relative mx-auto mb-section-gap flex min-h-[70vh] max-w-container-max flex-col items-start justify-center px-margin-mobile md:px-margin-desktop"
	>
		<div class="relative z-10 w-full md:w-8/12">
			<h1
				class="mb-3 font-display-lg-mobile text-display-lg-mobile leading-tight tracking-tight text-primary md:font-display-lg md:text-display-lg"
			>
				Chanodom Ongkulna <br /><span
					class="text-2xl font-light text-surface-tint italic md:text-4xl"
					>If you're exhausted, you're still early in the learning process.</span
				>
			</h1>
			<p class="mb-1 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
				Welcome to my personal space on the web. I built this site using SvelteKit to experiment
				with new technology while highlighting my favorite projects and providing a place to
				connect. Feel free to explore my work.
			</p>
			<p class="mb-12 text-xl font-light text-surface-tint italic md:text-xl">
				Code Name: BlackglassesDev
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
		<div
			aria-hidden="true"
			class="absolute top-1/2 right-margin-desktop hidden w-1/3 -translate-y-1/2 opacity-30 lg:block"
		>
			<div
				class="aspect-square w-full rounded-full bg-cover bg-center blur-[80px]"
				style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtP0J7Db0crK1EMWBnBGkzEyNcZpbzeId4Lv7ihsj1PHW9XUeEe4J2YF55UlOPONq09U5cWvyU1jj6L9WU0V6S2ZuHLuHjsCd5Y6suDaHWE61aN5vFweF_Bas-jYlmZm2DSeIJteVfem9pTCOcoFOu2JDGcBWW6EZobxwX8KEyngxnF5j969boZ0MFQIVH94_n8VX_1x8LRmMK5reFd_APmp7SLkpCZcs1F_s-9uudOrXpu5pfKVzAxw');"
			></div>
		</div>
	</section>

	<section
		class="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop"
		id="works"
	>
		<div class="mb-16 flex items-end justify-between border-b border-white/10 pb-8">
			<h2 class="font-headline-md text-headline-md text-primary">Featured Works</h2>
			<a
				class="hidden items-center gap-2 rounded-full px-4 py-2 font-label-caps text-label-caps tracking-[0.2em] text-on-surface-variant uppercase transition-colors duration-400 hover:bg-white/5 hover:text-primary md:inline-flex"
				href={resolve('/allWorks')}
			>
				All Projects <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
			</a>
		</div>
		<div class="grid grid-cols-1 gap-gutter md:grid-cols-12">
			<article class="group md:col-span-8">
				<div class="glass-panel relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl">
					<img
						class="portfolio-card-img h-full w-full object-cover"
						alt="img project RMUTL-SkillMapping."
						src={RMUTLSkillMapping}
					/>
				</div>
				<div class="flex items-start justify-between">
					<div>
						<h3
							class="mb-2 font-headline-sm text-headline-sm text-primary transition-all group-hover:text-glow-silver"
						>
							RMUTL-SkillMapping
						</h3>
						<p class="font-body-md text-body-md text-on-surface-variant">Project skill mapping.</p>
						<!-- <p class="font-body-md text-body-md text-on-surface-variant">Status : Pending..</p> -->
					</div>
					<span
						class="inline-block rounded-full border border-white/20 bg-[#050505] px-4 py-1.5 font-label-caps text-[10px] tracking-[0.2em] text-on-surface uppercase"
						>Status: Pending</span
					>
				</div>
			</article>
			<!-- <article class="group cursor-pointer md:col-span-4 md:mt-24">
				<div class="glass-panel relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl">
					<img
						class="portfolio-card-img h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
						alt="A mobile app interface presenting a luxury real estate portfolio with a dark theme, deep blacks, and silver typography."
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
			<article class="group mt-16 cursor-pointer md:col-span-12 md:mt-32">
				<div class="glass-panel relative mb-6 aspect-[21/9] overflow-hidden rounded-2xl">
					<img
						class="portfolio-card-img h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
						alt="A wide-format digital dashboard for a wealth management firm with fine silver data visualizations on a deep black background."
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
			</article> -->
		</div>
	</section>
</main>
