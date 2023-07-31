<script>
    import {page} from "$app/stores";
    export let data;
    let planetId=$page.params.planetId;
</script>

<div class="planet">
    <p>Planet Name: {data.planetData.name}</p>
    <p>Rotation Period: {data.planetData.rotation_period}</p>
    <p>Orbital_Period: {data.planetData.orbital_period}</p>
    <a href={`/planets/${planetId}/residents`}> 
        <p>Residents</p>
    </a>
    
</div>

<style>
    .planet{
        max-width: 600px;
        margin:20px auto;
    }
</style>