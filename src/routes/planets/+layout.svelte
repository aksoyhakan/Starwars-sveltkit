<script>
    import {currentUser} from "$lib/store.js";
</script>
<h2>{$currentUser} Planets</h2>
<slot/>

<style>
    h2{
        max-width: 600px;
        margin:0 auto;
        margin-top: 100px;
    }
</style>