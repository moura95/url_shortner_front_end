<script lang="ts">
    // @ts-nocheck

    import {getallUrls} from "../api/requests/urls";
    import Item from "./components/Item.svelte";
    import {onMount} from "svelte";

    let golies = [];
    onMount(async () => {
        try {
            const data = await getallUrls();
            console.log(data);

            if (Array.isArray(data) || typeof data === "object") {
                golies = data;
            } else {
                console.error("{#each} only works with iterable values.");
            }
        } catch (error) {
            console.error("Error fetching golies:", error);
        }
    });
</script>

<!-- <h1>-- URL Shortener</h1> -->
<div class="cards">
    {#each golies as goly}
        <Item {goly}/>
    {/each}
</div>

<style>
    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
</style>
