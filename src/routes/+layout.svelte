<script lang="ts">
	import '../app.css';
	import midglen from '$lib/assets/midglen.svg';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	let { children } = $props();
	import { page } from '$app/state';
</script>

<svelte:head>
	<link rel="icon" href={midglen} />
</svelte:head>
<Navbar />
{#if page.url.pathname == '/'}
	<div class=" min-h-screen min-w-screen bg-white">
		{@render children?.()}
	</div>
{:else}
	<div class="min-h-screen min-w-screen bg-white pt-24">
		{@render children?.()}
	</div>
{/if}
<Footer />
