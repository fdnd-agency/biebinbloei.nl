<script>
    let { handleNav, href, title } = $props();
</script>

<a onclick={handleNav} {href}>{title}</a>

<style>
    a{
        display: block;
        width: 100%;
        font-size: 1.2em;
        color: var(--main-color-green);
        text-decoration: none;
        font-family: var(--link-font);
    }
    a:hover{
        color: var(--main-color-orange);
    }

    @media (min-width: 900px) {
        a{
            font-size: 1em;
            color: var(--text-color-white);
            transition: transform 0.2s ease-in-out;
        }
        a:hover{
            transform: scale(1.1);
        }
    }

</style>