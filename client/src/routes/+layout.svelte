<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import logo from "$lib/assets/gita logo.png";
	import Navbar from "$lib/components/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<div class="layout-bg">
	<Navbar />

	{@render children()}
</div>
