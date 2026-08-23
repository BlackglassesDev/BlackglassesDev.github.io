<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import DownloadModal from '$lib/components/DownloadModal.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();

	let downloadOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>AESTHETE - Luxury Portfolio</title>
	<link href="https://fonts.googleapis.com" rel="preconnect" />
	<link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar ondownload={() => (downloadOpen = true)} />
{@render children()}
<Footer />
<DownloadModal open={downloadOpen} onclose={() => (downloadOpen = false)} />
