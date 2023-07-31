<script>
    import { page } from "$app/stores";
    export let data;
    let planetId = $page.params.planetId;
</script>

<div class="residents">
    <h3>{data.planetData.name} Planet Resident</h3>
    {#each data.planetData.residents as resident, index}
        <a href={`/planets/${planetId}/residents/${resident.split("/")[5]}`}>
            <p>{index + 1}. Resident</p>
        </a>
    {/each}
</div>

<style>
    .residents {
        max-width: 600px;
        margin: 20px auto;
    }
</style>
