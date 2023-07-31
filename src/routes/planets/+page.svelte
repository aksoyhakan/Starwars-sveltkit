<script>
    import PaginationPlanets from '$lib/PaginationPlanets.svelte';
    export let data;
    $: totalPage=Math.ceil(data.planets.count/10);
</script>
<div class="planets-container">
{#each data.planets.results as planet,index (planet.name)}
    <a href={`/planets/${(data.currentPage-1)*10+index+1}`}>
        <p>{planet.name}</p>
    </a>
{/each}
<div class="pagination">
{#each Array(totalPage) as _ ,i}
    <PaginationPlanets page={i} currentPage={data.currentPage}/>
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

    p{
        padding: 4px;
        border-bottom: 2px solid black;
    }
</style>


