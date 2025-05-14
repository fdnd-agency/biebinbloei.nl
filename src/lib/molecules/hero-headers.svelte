<script>
	let { heroInfo } = $props();
</script>

<header>
	<div class="overlay"></div>
	<h1>{heroInfo.heading1}</h1>
	<img src={heroInfo.image.url} alt="stekjes" />
</header>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 50vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
	}
    
	header {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-family: var(--header-font);
		position: absolute;
		color: var(--text-color-white);
		font-size: clamp(3em, 15vw, 5em);
	}

	img {
		width: 100%;
		height: 50vh;
		object-fit: cover;
	}

	@media (min-width: 48rem) {
		h1 {
			font-size: clamp(5.8em, 13vw, 6em);
		}
	}

	@media (min-width: 64rem) {
		.overlay,
		img {
			width: 100%;
			height: 50vh;
		}
	}
</style>
