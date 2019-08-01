import { Component, h } from '@stencil/core'

@Component({
  tag: 'projects-tab',
  styleUrl: 'projects-tab.css'
})
export class ProjectsTab {
  render() {
    return (
      <ul class="projects">
        <li>
          <a href="https://github.com/chrisshank">Github</a>
        </li>
        <li>
          <a href="https://codepen.io/chrisshank">Codepen</a>
        </li>
        <li>
          <a href="https://medium.com/@chrisshank23">Medium</a>
        </li>
      </ul>
    )
  }
}
