<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import MenuTree from './MenuTree.svelte';
	import type { MenuItem } from '$lib/types';

	export let menuItems: MenuItem[] = [];
	export let onClose: () => void = () => {};

	let show: Record<string, boolean> = {};
	let dialogElement: HTMLDivElement;

	const toggle = (key: string) => (show = { ...show, [key]: !show[key] });

	const clickBackdrop = (e: MouseEvent) => {
		if (e.currentTarget === e.target) onClose();
	};

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape') onClose();
	}

	function handleBackdropKeypress(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			onClose();
		}
	}

	onMount(() => {
		if (dialogElement) {
			dialogElement.focus();
		}
	});
</script>

<svelte:window on:keydown={onKey} />

<div
	class="fixed inset-0 z-50 flex w-screen bg-black/40"
	on:click={clickBackdrop}
	on:keydown={handleBackdropKeypress}
	role="dialog"
	aria-modal="true"
	bind:this={dialogElement}
	tabindex="-1"
	in:fade={{ duration: 150 }}
	out:fade={{ duration: 150 }}
>
	<div
		class="relative ml-auto flex h-screen w-full bg-white p-4 shadow-lg md:w-1/3"
		in:fly={{ x: 500, duration: 220 }}
		out:fly={{ x: 500, duration: 180 }}
	>
		<button
			class="absolute top-0 right-0 pt-8 pr-8 hover:cursor-pointer"
			on:click={onClose}
			aria-label="Close menu"
		>
			<svg
				class="h-6 w-6 text-black md:h-8 md:w-8"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<line x1="18" y1="6" x2="6" y2="18" />
				<line x1="6" y1="6" x2="18" y2="18" />
			</svg>
		</button>

		<div class="flex w-full flex-col space-y-2 pt-16">
			{#each menuItems as item, index}
				{@const key = `${index}`}

				<div>
					{#if item.hasLink}
						<a
							href={item.link ?? '#'}
							class="relative inline-block text-4xl text-black uppercase after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:cursor-pointer hover:after:w-full md:text-2xl"
							on:click={() => (item.hasSubItems ? toggle(key) : onClose())}
						>
							{item.name}
						</a>
					{:else}
						<button
							class="relative inline-block text-4xl text-black uppercase after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:cursor-pointer hover:after:w-full md:text-2xl"
							on:click={() => toggle(key)}
						>
							{item.name}
						</button>
					{/if}

					{#if item.hasSubItems && show[key]}
						<div
							class="space-y-2 pt-2 pl-4"
							in:slide={{ duration: 200 }}
							out:slide={{ duration: 200 }}
						>
							<MenuTree items={item.subItems ?? []} path={key} {show} {toggle} {onClose} />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
