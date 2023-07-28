<script>
    import Player from '$lib/Player.svelte';
    import Pagination from '$lib/Pagination.svelte';
    export let data;
    $: totalPage = Math.ceil(data.response.count / 10);
</script>

<div>
    <div class="players-container">
        {#each data.response.results as player (player.name)}
            <Player player={player}/>
        {/each}
    </div>

    <div class="pagination">
        {#each Array(totalPage) as _, i}
            <Pagination page={i} currentPage={data.currentPage} />
        {/each}
    </div>
</div>

<style>
    .players-container {
        max-width: 600px;
        margin: 60px auto;
    }
    .pagination {
        max-width: 600px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 40px auto;
    }
 
   
</style>
