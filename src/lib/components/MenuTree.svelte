<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { MenuItem } from '$lib/types';
	import MenuTree from './MenuTree.svelte'; // self-recursive import is fine

	export let items: MenuItem[] = [];
	export let path: string = '';
	export let show: Record<string, boolean> = {};
	export let toggle: (key: string) => void;
	export let onClose: () => void = () => {};
</script>

{#each items as subItem, subIndex}
	{@const key = `${path}-${subIndex}`}

	<div>
		{#if subItem.hasLink}
			<a class="group block w-full text-left" href={subItem.link ?? '#'} on:click={onClose}>
				<span
					class="relative inline-block text-2xl text-black uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full md:text-xl"
				>
					{subItem.name}
				</span>
			</a>
		{:else}
			<button class="group block w-full text-left" on:click={() => toggle(key)}>
				<span
					class="relative inline-block text-2xl text-black uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full md:text-xl"
				>
					{subItem.name}
				</span>
			</button>
		{/if}

		{#if subItem.hasSubItems && show[key]}
			<div class="space-y-2 pt-2 pl-4" in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
				<MenuTree items={subItem.subItems ?? []} path={key} {show} {toggle} {onClose} />
			</div>
		{/if}
	</div>
{/each}
