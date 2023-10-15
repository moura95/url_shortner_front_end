<script>
    import {goto} from "$app/navigation";
    import {createEventDispatcher} from "svelte";
    import Card from "./Card.svelte";
    import {deleteGoly} from "../../api/requests/urls.js";

    let isUpdating = false;

    let deleteAction = async () => {
        try {
            console.log(goly.id)
             await deleteGoly(goly.id);
            alert("Goly deleted");
            return goto("/");

            // return response;
        } catch (error) {
            console.log(error);
        };
    };
    export let goly = {
        id: 0,
        full: "",
        short: "",
        random: false,
        count: 0,
    };
</script>

<div class="card">
    <Card>
        <h2>ID {goly.id}</h2>
        {#if !isUpdating}
            <p>Url: {goly.full}</p>
        {:else}
            <input
                    type="text"
                    placeholder="Url"
                    bind:value={goly.full}
                    class="text-black"
            />
        {/if}
        <p>Redirect: {goly.short}</p>
        <p>Clicked {goly.count}</p>
        <p>Random: {goly.random}</p>
        {#if !isUpdating}
            <button on:click={() => (isUpdating = true)} class="update">Update
            </button
            >
            <button on:click={ deleteAction} class="delete"
            >Delete
            </button
            >
        {:else}
            <button on:click={() => console.log("abriu")} class="update">Save</button>
            <button on:click={() => (isUpdating = false)} class="delete"
            >Cancel
            </button
            >
        {/if}
    </Card>
</div>

<style>
    /* Estilo para os botões */
    button {
        border: none;
        flex-direction: row;
        color: white;
        padding: 5px 10px;
        font-size: 12px;
        margin-top: 0.5em;
    }

    .update {
        background-color: rgb(240, 240, 222);
        color: black;
    }

    .delete {
        background-color: red;
    }
</style>
