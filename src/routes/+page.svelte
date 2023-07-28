<script>
    export let data;
</script>

<div class="main-section">
    <h1>{data.starwars.title}</h1>
    <p>{data.starwars.welcomeMessage}</p>
    <img
        src={data.starwars.url}
        alt="Starwars"
        width="480"
        height="320"
        style={{display:"block"}}
    />
</div>

<style>
    .main-section{
        max-width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }
</style>