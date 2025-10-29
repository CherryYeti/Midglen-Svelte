<script lang="ts">
	import type { CarouselItem } from '$lib/types';
	import town1 from '$lib/assets/portfolio/commercial/restaurants/town/town1.jpg';
	import nagi1 from '$lib/assets/portfolio/commercial/restaurants/nagi/nagi1.jpg';
	import mistral1 from '$lib/assets/portfolio/commercial/restaurants/mistral/mistral1.jpg';
	import glencrag1 from '$lib/assets/portfolio/residential/glencrag/glencrag1.jpg';
	import patrick1 from '$lib/assets/portfolio/residential/patrick/patrick1.jpg';
	import Carousel from '../../../components/Carousel.svelte';

	let items: CarouselItem[] = [
		{
			src: town1,
			label: 'West Glen Main House',
			alt: 'Blue alpine lake surrounded by mountains'
		},
		{
			src: nagi1,
			label: 'Golnick Residence',
			alt: 'City skyline at sunset'
		},
		{
			src: patrick1,
			label: 'Patrick Residence',
			alt: 'Long straight road in the desert'
		},
		{
			src: mistral1,
			label: 'Greer Studio',
			alt: 'Long straight road in the desert'
		},
		{
			src: mistral1,
			label: 'Emerald Hills Residence',
			alt: 'Long straight road in the desert'
		},
		{
			src: glencrag1,
			label: 'Glencrag Residence',
			alt: 'Long straight road in the desert'
		},
		{
			src: mistral1,
			label: 'Glenwood House',
			alt: 'Long straight road in the desert'
		}
	];
</script>

<Carousel {items} />
<h1 class="mx-auto mt-16 max-w-5xl pl-6 text-5xl">Residential</h1>

<div class="mx-auto max-w-5xl">
	<p class="px-8 pt-16 text-2xl">
		The Midglen Studio specializes in new construction and remodel of custom restaurants in the Bay
		Area. We have also worked with existing clients who want to expand their footprint to southern
		California and even Hawaii.
	</p>
</div>
