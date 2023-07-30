<script>
    import { loginStatus,currentUser } from "$lib/store.js";
    import Cookies from "js-cookie";
    export let headerData;
    $: console.log($loginStatus);
    function handleLogout(name) {
        loginStatus.logout();
        currentUser.deleteCurrentUser();
        Cookies.remove(name);
    }
</script>

<div class="header-container">
    <div class="header-section">
        <a href="/">
            <h1>{headerData?.title}</h1>
        </a>
        <div class="header-nav">
            {#if !$loginStatus}
                <a href="/{headerData.login.toLowerCase()}">
                    <p>{headerData?.login}</p>
                </a>
                <a href="/{headerData.register.toLowerCase()}">
                    <p>{headerData?.register}</p>
                </a>
            {/if}
            <a href="/{headerData.players.toLowerCase()}">
                <p>{headerData?.players}</p></a
            >
            <a href="/{headerData.planets.toLowerCase()}">
                <p>{headerData?.planets}</p>
            </a>
            {#if $loginStatus}
                <a href="/"
                    ><p on:click={() => handleLogout("username")}>
                        {headerData?.logout}
                    </p></a
                >
            {/if}
        </div>
    </div>
</div>

<style>
    .header-container {
        width: 100%;
        position: fixed;
        top: 0;
        background-color: rgb(140, 140, 140);
    }
    .header-section {
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
    .header-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
    }
    a {
        text-decoration: none;
        color: black;
    }
</style>
