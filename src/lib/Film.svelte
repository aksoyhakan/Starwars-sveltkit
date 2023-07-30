
<script>
    export let filmId;
    export let filmData;
    export let playerName;
</script>

<div class="film">
    <h2>{filmId}. Film of {playerName} Detail Info</h2>
    <p>Movie Name: {filmData.title}</p>
    <div>Opening Crawl: {@html filmData.opening_crawl}</div>
    <p>Director: {filmData.director}</p>
</div>

<style>
    .film{
        max-width: 600px;
        margin:20px auto;
    }
</style>