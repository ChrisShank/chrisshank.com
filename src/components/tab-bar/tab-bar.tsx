import { Component, h, Event, EventEmitter, Prop } from '@stencil/core'
import { Tab } from '../../tabs'

@Component({
  tag: 'tab-bar',
  styleUrl: 'tab-bar.css',
  shadow: true
})
export class TabBar {
  @Prop() activeTab!: Tab
  @Prop() tabs!: Tab[]
  @Prop() width!: number

  @Event() tabChange: EventEmitter

  render() {
    return (
      <header>
        <nav style={{ width: `${this.width}rem` }}>
          <ul class="nav-tabs">
            {this.tabs.map(tab => (
              <li
                class={`nav-tab ${
                  tab === this.activeTab ? 'active-nav-tab' : ''
                }`}
                onClick={() => {
                  if (tab !== this.activeTab) this.tabChange.emit(tab)
                }}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}
