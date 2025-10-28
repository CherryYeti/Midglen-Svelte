<script>
	import Project from '../../../../../components/Project.svelte';
	import nagi1 from '$lib/assets/portfolio/commercial/restaurants/nagi/nagi1.jpg';
	import nagi2 from '$lib/assets/portfolio/commercial/restaurants/nagi/nagi2.jpg';
</script>

<Project
	title="Ramen Nagi"
	description={[
		'The complete remodel of an existing restaurant into Town included an all new cookline, prep kitchen, dining room, island bar, wine room, restrooms and a private dining room.  A dining parklet with integral heating and umbrellas was later added. '
	]}
	subtitles={[
		'Palo Alto, CA',
		'Santa Clara, CA',
		'Century City, CA',
		'Arcadia, CA',
		'La Jolla, CA',
		'Costa Mesa, CA'
	]}
	images={[nagi1, nagi2]}
	link={'https://ramennagiusa.com'}
/>
