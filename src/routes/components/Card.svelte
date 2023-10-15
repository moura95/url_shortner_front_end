<div class="card">
  <slot />
</div>

<style>
  .card {
    background-color: steelblue;
    color: white;
    border-radius: 15px;
    padding: 50px;
    margin: 20px 10px;
    width: 400px;
    flex-direction: row;

  }
  @media (max-width: 400px) {
    .card {
      width: 100%;
    }
  }
</style>
