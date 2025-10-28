<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';
	import type { CarouselItem } from '$lib/types';

	export let items: CarouselItem[] = [];

	export let interval: number = 8000;
	export let loop: boolean = true;

	let current = 0;
	let dir: 1 | -1 = 1;
	let timer: ReturnType<typeof setInterval> | null = null;

	function setAutoplay(): void {
		if (timer) clearInterval(timer);
		if (interval > 0) timer = setInterval(next, interval);
	}
	$: setAutoplay();
	onDestroy(() => timer && clearInterval(timer));

	function next(): void {
		dir = 1;
		const last = items.length - 1;
		current = loop ? (current + 1) % items.length : Math.min(current + 1, last);
	}
	function prev(): void {
		dir = -1;
		current = loop ? (current - 1 + items.length) % items.length : Math.max(current - 1, 0);
	}
	function goTo(i: number): void {
		if (i === current) return;
		dir = i > current ? 1 : -1;
		current = ((i % items.length) + items.length) % items.length;
	}

	let startX: number | null = null;
	function onPointerDown(e: PointerEvent) {
		startX = e.clientX;
	}
	function onPointerUp(e: PointerEvent) {
		if (startX === null) return;
		const dx = e.clientX - startX;
		startX = null;
		if (Math.abs(dx) > 30) (dx < 0 ? next : prev)();
	}
</script>

<div
	class="relative mx-auto w-full md:w-2/3"
	role="region"
	aria-label="Image carousel"
	aria-roledescription="carousel"
	on:pointerdown={onPointerDown}
	on:pointerup={onPointerUp}
	on:mouseenter={() => timer && clearInterval(timer)}
	on:mouseleave={setAutoplay}
	on:focusin={() => timer && clearInterval(timer)}
	on:focusout={setAutoplay}
>
	<div class="relative aspect-video overflow-hidden bg-gray-200 shadow-lg select-none">
		{#if items.length}
			{#key current}
				<img
					src={items[current].src}
					alt={items[current].alt ?? items[current].label}
					class="absolute inset-0 h-full w-full object-cover"
					draggable="false"
					in:fly={{ x: dir === 1 ? 80 : -80, duration: 500, easing: cubicOut }}
					out:fly={{ x: dir === 1 ? -80 : 80, duration: 500, easing: cubicOut }}
				/>
			{/key}

			<div class="absolute right-0 bottom-0 left-0">
				<div class="bg-gradient-to-t from-black/60 to-transparent px-3 pt-10 pb-3 text-center">
					{#if items[current].link}
						<a
							href={items[current].link}
							class="text-md mb-2 inline-block rounded-xl bg-black/55 px-6 py-3 font-medium text-white uppercase backdrop-blur transition-all hover:bg-black/70 md:mb-8 md:text-3xl"
						>
							{items[current].label}
						</a>
					{:else}
						<span
							class="text-md mb-2 inline-block rounded-xl bg-black/55 px-6 py-3 font-medium text-white uppercase backdrop-blur md:mb-8 md:text-3xl"
						>
							{items[current].label}
						</span>
					{/if}
				</div>
			</div>
		{/if}

		<button
			class="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:cursor-pointer hover:bg-white"
			aria-label="Previous"
			on:click={prev}
		>
			<svg viewBox="0 0 24 24" class="h-5 w-5"
				><path
					d="M15 18l-6-6 6-6"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		</button>
		<button
			class="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:cursor-pointer hover:bg-white"
			aria-label="Next"
			on:click={next}
		>
			<svg viewBox="0 0 24 24" class="h-5 w-5"
				><path
					d="M9 6l6 6-6 6"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		</button>

		<div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
			{#each items as _, i}
				<button
					class="h-2.5 w-2.5 rounded-full ring-1 ring-black/20 {i === current
						? 'bg-white'
						: 'bg-white/50'}"
					on:click={() => goTo(i)}
					aria-label={'Go to slide ' + (i + 1)}
				></button>
			{/each}
		</div>
	</div>
</div>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}}
/>
