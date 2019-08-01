import { Component, h } from '@stencil/core'

@Component({
  tag: 'home-tab',
  styleUrl: 'home-tab.css',
  shadow: true
})
export class HomeTab {
  render() {
    return [
      <img
        class="logo"
        src="assets/logo.png"
        alt="logo of infinitywith my initials superimposed"
      />,
      <h4 class="name">Chris Shank</h4>,
      <span class="description">
        Software Engineer | Designer | Lifelong Learner
      </span>
    ]
  }
}
