<script>
    import { page } from "$app/stores";
    export let form;

    let redirectTo = $page.url.searchParams.get("redirectTo")||"/ ";
</script>

<div class="login">
    <form method="post" action="?/login&redirectTo={redirectTo}">
        <div>
            <label for="username">Username :</label>
            <input
                type="text"
                id="username"
                name="username"
                value={form?.username || ""}
            />
        </div>
        <div>
            <label for="password">Password :</label>
            <input type="password" id="password" name="password" />
        </div>
        <button>Giriş</button>
    </form>
</div>
{#if form?.message}
    <p>{form.message}</p>
{/if}

<style>
    .login {
        max-width: 600px;
        margin: 200px auto;
        padding: 40px 20px;
        border: 2px solid black;
        border-radius: 5%;
        background-color: rgb(200, 200, 200);
    }
</style>
