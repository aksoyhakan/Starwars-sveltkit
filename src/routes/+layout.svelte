<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import {page} from "$app/stores";
    export let data;
</script>

<div class="main-sec">
<Header headerData={data.headerData}/>
<slot />
<Footer footerData={data.footerData}/>
</div>
<svelte:head>
    <title>{$page.data.title||"Starwars"}</title>
</svelte:head>
<style>
    .main-sec{
        display: block;
        margin: O auto;
        height: 100%;
    }
</style>