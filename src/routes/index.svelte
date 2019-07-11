<script>
  import FlipCard from "../components/FlipCard.svelte";
</script>

<style>
  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    min-width: 320px;
  }
</style>

<div class="container">
  <FlipCard height={11.089} width={17.942} dimensionUnit="rem">
    <h3 slot="front" class="card-front">Chris Shank</h3>
    <h3 slot="back" class="card-back">Hello World</h3>
  </FlipCard>
</div>
