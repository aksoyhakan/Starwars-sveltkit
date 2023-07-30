<script>
    import { page } from "$app/stores";
    export let data;
    let playerId = $page.params.playerId;
</script>

<div class="films">
    <h2>The Film List of {data.playerData.name}</h2>
    {#each data.playerData.films as film, index (film)}
        <a href={`/players/${playerId}/films/${film.split("/")[5]}`}>
            <p>{index + 1}. film</p>
        </a>
    {/each}
</div>

<style>
    .films{
        max-width: 600px;
        margin: 20px auto;
    }
</style>
