<script>
	import { resolve } from '$app/paths';
	import logo_rm_bg from '$lib/assets/logo-removebg.png';

	let { ondownload } = $props();

	let menuOpen = $state(false);

	const activeClass = 'border-primary text-primary border-b pb-1';
	const inactiveClass = 'text-on-surface-variant hover:text-primary transition-colors duration-400';
</script>

<nav
	class="fixed top-4 left-1/2 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-container-max -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#121414]/50 px-6 py-4 font-label-caps text-label-caps backdrop-blur-[20px] md:top-6 md:px-10"
>
	<div class="font-headline-sm text-headline-sm tracking-tighter text-on-surface">
		<img src={logo_rm_bg} alt="Logo" class="h-10 w-10" />
	</div>
	<ul class="hidden items-center gap-gutter md:flex">
		<li><a class={activeClass} href={resolve('/')}>Home</a></li>
		<li><a class={inactiveClass} href={resolve('/#about')}>About</a></li>
		<li><a class={inactiveClass} href={resolve('/allWorks')}>Works</a></li>
		<li><a class={inactiveClass} href={resolve('/#contact')}>Contact</a></li>
	</ul>
	<div class="flex items-center gap-4">
		<button
			class="hidden items-center justify-center rounded-full bg-[#E5E4E2] px-6 py-3 font-label-caps text-label-caps font-bold tracking-[0.2em] text-[#050505] uppercase transition-all duration-400 hover:border hover:border-[#E5E4E2] hover:bg-transparent hover:text-[#E5E4E2] md:inline-flex"
			onclick={ondownload}
		>
			Download
		</button>
		<button
			class="text-on-surface md:hidden"
			aria-expanded={menuOpen}
			aria-label="Toggle navigation"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">menu</span>
		</button>
	</div>
</nav>

{#if menuOpen}
	<div class="glass-panel fixed top-24 right-4 z-50 rounded-2xl p-6 md:hidden">
		<ul class="flex flex-col gap-4 font-label-caps text-label-caps">
			<li>
				<a class={activeClass} href={resolve('/')} onclick={() => (menuOpen = false)}>Home</a>
			</li>
			<li>
				<a class={inactiveClass} href={resolve('/#about')} onclick={() => (menuOpen = false)}
					>About</a
				>
			</li>
			<li>
				<a class={inactiveClass} href={resolve('/allWorks')} onclick={() => (menuOpen = false)}
					>Works</a
				>
			</li>
			<li>
				<a class={inactiveClass} href={resolve('/#contact')} onclick={() => (menuOpen = false)}
					>Contact</a
				>
			</li>
			<li>
				<button
					class="text-on-surface-variant uppercase transition-colors duration-400 hover:text-primary"
					onclick={() => {
						menuOpen = false;
						ondownload();
					}}
				>
					Download
				</button>
			</li>
		</ul>
	</div>
{/if}
