<script lang="ts">
	import ProjectCarousel from './ProjectCarousel.svelte';
	import type { ProjectCarouselItem } from '$lib/types';

	export let images: Array<string | { src: string; alt?: string; label?: string }> = [];
	export let title: string = '';
	export let description: string[] = [];
	export let subtitles: string[] = [];
	export let link: string = '';
	export let architect: string = '';
	export let contractor: string = '';
	export let interval: number = 8000;
	export let loop: boolean = true;

	let items: ProjectCarouselItem[] = [];
	$: items = images.map((img, i) => {
		if (typeof img === 'string') {
			return {
				src: img,
				alt: `${title} image ${i + 1}`,
				label: title
			} as ProjectCarouselItem;
		}
		return {
			src: img.src,
			alt: img.alt ?? `${title} image ${i + 1}`,
			label: img.label ?? title
		} as ProjectCarouselItem;
	});
</script>

<div class="pt-32">
	<div class="mx-auto mb-16 w-full">
		<div class="flex justify-center">
			<ProjectCarousel {items} {interval} {loop} />
		</div>
	</div>
</div>

<h1 class="mx-auto max-w-5xl pl-6 text-4xl">{title}</h1>
<div class="mx-auto my-2 h-0.5 w-full max-w-5xl bg-blue-500"></div>

<div class="mx-auto max-w-5xl">
	{#each subtitles as subtitle}
		<h2 class="mx-auto max-w-5xl pl-6 text-2xl text-neutral-400">{subtitle}</h2>
	{/each}

	{#if link}
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			class="relative ml-6 block w-fit max-w-5xl text-2xl text-neutral-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-neutral-400 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:cursor-pointer hover:after:w-full"
		>
			{link}
		</a>
	{/if}
</div>

<div class="mx-auto max-w-5xl">
	{#each description as desc, index}
		<p class="px-8 pt-16 text-2xl">{desc}</p>
	{/each}
	{#if architect}
		<p class="pt-4 text-2xl text-neutral-400">
			Architect: {architect}
		</p>
	{/if}
	{#if contractor}
		<p class="pt-4 text-2xl text-neutral-400">
			Contractor: {contractor}
		</p>
	{/if}
</div>
