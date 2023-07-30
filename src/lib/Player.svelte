<script>
    import { fade } from "svelte/transition";
    import {page} from "$app/stores";
    export let player;
    let detailToogle = false;
    let playerId=$page.params.playerId; 
</script>

<div class="player">
    <div class="name">
        <p>Name: {player.name}</p>
        <p on:click={() => (detailToogle = !detailToogle)}>
            {detailToogle ? "-" : "+"}
        </p>
    </div>
    {#if detailToogle}
        <div transition:fade>
            <p>Height: {player.height}</p>
            <p>Mass: {player.mass}</p>
            <p>Gender: {player.gender}</p>
        </div>
    {/if}
    <a href={`/players/${playerId}/films/`}><p>Films</p></a>
    <p>Home-World: {player.homeworld}</p>
</div>

<style>
    .player {
        max-width: 600px;
        border-bottom: 2px solid black;
        padding: 10px;
        margin: 20px auto;
    }
    .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
