<script>
  export let height = 10
  export let width = 20
	export let rotateDegrees = 180
</script>

<style>
  .flip-card {
    perspective: 1000px;
  }

  .flip-card-inner {
    height: 100%;
    position: relative;
    text-align: center;
    transition: transform 0.8s ease-out;
    transform-style: preserve-3d;
    width: 100%;
    will-change: transform;
  }

  .flip-card-front,
  .flip-card-back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: rgb(245, 239, 239);
    border-radius: 7px;
    box-shadow: 0 6px 20px rgba(36, 37, 38, 0.75);
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
</style>

<div class="flip-card" style="height: {height}rem; width: {width}rem;">
  <div 
		class="flip-card-inner" 
		style={`transform: rotateY(${rotateDegrees}deg)`}>
    <div class="flip-card-front">
      <slot name="front" />
    </div>
    <div class="flip-card-back">
      <slot name="back" />
    </div>
  </div>
</div>
