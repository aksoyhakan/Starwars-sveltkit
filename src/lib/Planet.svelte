<script>
    export let planet;
</script>

<div class="planet">
    <h3>{planet.name}</h3>
    {#each planet.residents as resident (resident)}
    <p>{resident}</p>
    {/each}
</div>

<style>
       .planet {
        border-bottom: 2px solid black;
        padding: 10px;
    }
</style>