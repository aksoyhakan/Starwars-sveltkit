<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    export let data;
    $:console.log(data.headerData)
</script>

<div class="main-sec">
<Header headerData={data.headerData}/>
<slot />
<Footer footerData={data.footerData}/>
</div>

<style>
    .main-sec{
        display: block;
        margin: O auto;
        height: 100%;
    }
</style>