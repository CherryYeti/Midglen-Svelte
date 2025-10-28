<script lang="ts">
	import type { CarouselItem } from '$lib/types';
	import Carousel from '../../../../components/Carousel.svelte';
	import town1 from '$lib/assets/portfolio/commercial/restaurants/town/town1.jpg';
	import nagi1 from '$lib/assets/portfolio/commercial/restaurants/nagi/nagi1.jpg';
	import mistral1 from '$lib/assets/portfolio/commercial/restaurants/mistral/mistral1.jpg';

	let items: CarouselItem[] = [
		{
			src: town1,
			label: 'Town',
			alt: 'Blue alpine lake surrounded by mountains',
			link: '/portfolio/commercial/restaurants/town'
		},
		{
			src: nagi1,
			label: 'Nagi',
			alt: 'City skyline at sunset',
			link: '/portfolio/commercial/restaurants/nagi'
		},
		{
			src: mistral1,
			label: 'Mistral',
			alt: 'Long straight road in the desert',
			link: '/portfolio/commercial/restaurants/mistral'
		}
	];
</script>

<Carousel {items} />
<h1 class="mx-auto mt-16 max-w-5xl pl-6 text-5xl">Restaurants</h1>

<div class="mx-auto max-w-5xl">
	<p class="px-8 pt-16 text-2xl">
		The Midglen Studio specializes in new construction and remodel of custom restaurants in the Bay
		Area. We have also worked with existing clients who want to expand their footprint to southern
		California and even Hawaii.
	</p>
</div>

<h1 class="mx-auto mt-16 max-w-5xl pl-6 text-5xl">Other Projects</h1>

<div class="mx-auto max-w-5xl">
	<ul class="px-8 pt-16 text-2xl">
		<li>Nola</li>
		<li>Milagros</li>
		<li>Donato Enoteca</li>
		<li>Cru Wine bar</li>
		<li>Timber & Salt</li>
		<li>Dutch Goose</li>
		<li>Fuki Sushi</li>
		<li>Stella Alpina Osteria</li>
		<li>Local Union 271</li>
		<li>Johnston's Saltbox</li>
		<li>Rossotti's Alpine Inn</li>
		<li>Satura Cakes</li>
	</ul>
</div>
