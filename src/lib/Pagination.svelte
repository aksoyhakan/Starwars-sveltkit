<script>
    export let page;
    export let currentPage;
</script>


<a href="/players/?page={page + 1}">
    <p class:clicked={currentPage==(page+1)}>{page + 1}</p>
</a>

<style>
     a{
        text-decoration: none;
        color:black;
    }
    .clicked{
        color:red;
    }
</style>