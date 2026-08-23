<script>
	let { open = false, onclose = () => {} } = $props();
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
		<div
			class="absolute inset-0 bg-[#050505]/80 backdrop-blur-[20px]"
			aria-hidden="true"
			onclick={onclose}
		></div>
		<div
			role="dialog"
			aria-modal="true"
			aria-label="Download documents"
			class="glass-panel relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/20 bg-surface-container-lowest shadow-2xl"
		>
			<div class="flex items-center justify-between border-b border-white/10 p-6">
				<h2 class="font-headline-md text-headline-md text-primary">Download Documents</h2>
				<button
					class="text-on-surface-variant transition-colors hover:text-primary"
					aria-label="Close"
					onclick={onclose}
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
	</div>
{/if}
