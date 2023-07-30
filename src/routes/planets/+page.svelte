<script>
    import Planet from '$lib/Planet.svelte';
    import Pagination from '$lib/Pagination.svelte';
    export let data;
    $: totalPage=Math.ceil(data.planets.count/10);
</script>
<div class="planets-container">
{#each data.planets.results as planet (planet.name)}
    <Planet planet={planet} />
{/each}
<div class="pagination">
{#each Array(totalPage) as _ ,i}
    <Pagination page={i} currentPage={data.currentPage}/>
{/each}
</div>
</div>
<style>
    .planets-container {
        max-width: 600px;
        margin: 20px auto;
    }
 
    .pagination {
        max-width: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 40px auto;
    }
</style>


