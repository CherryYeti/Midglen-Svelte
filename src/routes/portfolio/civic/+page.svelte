<script lang="ts">
	import type { CarouselItem } from '$lib/types';
	import barkley1 from '$lib/assets/portfolio/civic/barkleyfp/barkleyfp1.jpg';
	import Carousel from '../../../lib/components/Carousel.svelte';

	let items: CarouselItem[] = [
		{
			src: barkley1,
			label: 'Barkley Fields and Park',
			alt: 'Blue alpine lake surrounded by mountains'
		}
	];
</script>

<Carousel {items} />
<h1 class="mx-auto mt-16 max-w-5xl pl-6 text-5xl">Civic</h1>

<div class="mx-auto max-w-5xl">
	<p class="px-8 pt-16 text-2xl">
		The Midglen Studio specializes in new construction and remodel of custom restaurants in the Bay
		Area. We have also worked with existing clients who want to expand their footprint to southern
		California and even Hawaii.
	</p>
</div>
