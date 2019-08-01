import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'flip-card',
  styleUrl: 'flip-card.css',
  shadow: true
})
export class FlipCard {
  @Prop() height: number = 10
  @Prop() width: number = 20
  @Prop() rotateDegrees: number = 180

  render() {
    return (
      <div
        class="flip-card"
        style={{ height: `${this.height}rem`, width: `${this.width}rem` }}
      >
        <div
          class="flip-card-inner"
          style={{ transform: `rotateY(${this.rotateDegrees}deg)` }}
        >
          <div class="flip-card-front">
            <slot name="front" />
          </div>
          <div class="flip-card-back">
            <slot name="back" />
          </div>
        </div>
      </div>
    )
  }
}
