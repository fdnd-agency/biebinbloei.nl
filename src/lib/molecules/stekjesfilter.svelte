<script>
	let { data } = $props();
</script>

<section>
    <button>Alle stekjes</button>
    <button>Actuele stekjes</button>
</section>

<style>

button {
    background: var(--main-color-beige);
    color: var(--main-color-brown);
    font-family: 'Poppins-Medium';
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    cursor: pointer;
}

button:hover {
    background: var(--main-color-brown);
    color: var(--main-color-beige);
    font-family: 'Poppins-Bold';
}
</style>