<script>
  import { goto } from "$app/navigation";
  import "../app.postcss";
</script>

<div>
  <div class="container-box w-full">
    <div>
      <a href="/">Home</a>
    </div>
    <button on:click={() => goto("/new")}>Criar</button>
  </div>
  <slot />
</div>

<style lang="postcss">
  .container-box {
    background-color: rgb(96 165 250);
    height: 3rem;
    display: flex;
    align-items: center;
    padding-left: 10px;
    gap: 10px;
    flex-direction: row;
  }
</style>
