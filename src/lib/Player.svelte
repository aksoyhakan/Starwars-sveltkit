<script>
    export let player;
</script>

<div class="player">
    <p>{player.name}</p>
    {#each player.films as film (film)}
        <p>{film}</p>
    {/each}
    <p>{player.homeworld}</p>
</div>

<style>
        .player {
        border-bottom: 2px solid black;
        padding: 10px;
    }
</style>