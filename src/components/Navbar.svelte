<script lang="ts">
	import Menu from './Menu.svelte';
	import type { MenuItem } from '$lib/types';
	import midglen from '$lib/assets/midglen.svg';

	let isMenuOpen = false;

	const handleMenuToggle = () => (isMenuOpen = !isMenuOpen);
	const handleCloseMenu = () => (isMenuOpen = false);

	const menuItems: MenuItem[] = [
		{ name: 'Home', hasLink: true, link: '/', hasSubItems: false },
		{
			name: 'Portfolio',
			hasLink: false,
			hasSubItems: true,
			subItems: [
				{
					name: 'Commercial',
					hasLink: false,
					hasSubItems: true,
					subItems: [
						{
							name: 'Restaurants',
							hasLink: true,
							link: '/portfolio/commercial/restaurants',
							hasSubItems: false
						},
						{
							name: 'Offices',
							hasLink: true,
							link: '/portfolio/commercial/offices',
							hasSubItems: false
						}
					]
				},
				{ name: 'Residential', hasLink: true, link: '/portfolio/residential', hasSubItems: false },
				{ name: 'Civic', hasLink: true, link: '/portfolio/civic', hasSubItems: false }
			]
		},
		{
			name: 'About Us',
			hasLink: false,
			hasSubItems: true,
			subItems: [
				{ name: 'The Midglen Story', hasLink: true, link: '/about/story', hasSubItems: false },
				{ name: 'The Architecture Firm', hasLink: true, link: '/about/firm', hasSubItems: false },
				{
					name: 'The Construction Corporation',
					hasLink: true,
					link: '/about/construction',
					hasSubItems: false
				}
			]
		},
		{ name: 'Contact', hasLink: true, link: '/contact', hasSubItems: false }
	];
</script>

<div class="fixed top-0 z-50 w-screen bg-black/40 backdrop-blur-md">
	<div class="mx-auto px-4 py-2 md:px-8 md:py-4">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-between">
				<div class="flex items-end">
					<a href="/" class="flex items-baseline p-3 text-lg text-white uppercase md:text-3xl">
						<img src={midglen} alt="Logo" class="mr-2 h-8 w-8 md:h-16 md:w-16" />
						The Midglen Studio
					</a>
				</div>
				<div class="flex space-x-4">
					<button
						class="p-2 hover:cursor-pointer
					"
						on:click={handleMenuToggle}
						aria-label="Open main menu"
					>
						<svg
							class="h-6 w-6 text-white md:h-8 md:w-8"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<line x1="3" y1="6" x2="21" y2="6" />
							<line x1="3" y1="12" x2="21" y2="12" />
							<line x1="3" y1="18" x2="21" y2="18" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

{#if isMenuOpen}
	<Menu {menuItems} onClose={handleCloseMenu} />
{/if}
