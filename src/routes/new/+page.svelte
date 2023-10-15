<script>
  // @ts-nocheck

  import { goto } from "$app/navigation";

  import { createUrl } from "../../api/requests/urls.js";
  let full;
  let short;

  async function postUrl() {
    try {
      const data = await createUrl({ full, short });
      alert("Url criada com sucesso!");
      goto("/");
    } catch (error) {
      console.error("Error fetching golies:", error);
    }
  }
</script>

<div class="form-container">
  <form on:submit={postUrl}>
    <label for="full">Url</label>
    <input
      bind:value={full}
      type="text"
      id="full"
      name="full"
      placeholder="Full Url"
      required
    />
    <label for="short">SmallUrl</label>
    <input
      bind:value={short}
      type="text"
      id="short"
      name="short"
      placeholder="Short"
      required
    />
    <button type="submit">Criar</button>
  </form>
</div>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70vh;
  }

  form {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
    background-color: rgb(96 165 250);
    color: white;
    font-weight: bold;
  }
</style>
