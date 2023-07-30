<script>
    import { page } from "$app/stores";
    import Film from "$lib/Film.svelte";
    export let data;
    let {filmId}=$page.params;
</script>

<Film {filmId} filmData={data.filmData} playerName={data.playerData.name}/>
