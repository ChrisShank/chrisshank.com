import { Component, h } from '@stencil/core'

@Component({
  tag: 'about-tab',
  styleUrl: 'about-tab.css',
  shadow: true
})
export class AboutTab {
  render() {
    return (
      <div class="bio">
        <p>Trying to put the 🧩's together.</p>
        <p>Somthing about learning intrigues me.</p>
        <p>We have to start living in more sustainable ways 🌍.</p>
        <p>I love to 🧗, 📖, 💻, 📓, 🕺, 💭...</p>
      </div>
    )
  }
}
