import { Component, h, Listen, State } from '@stencil/core'
import tabs, { compareTabs, Tab } from '../../tabs'

const card = { height: 11.089, width: 17.942 }

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() frontTab: Tab = tabs.find(tab => tab.name === 'Home') // set initially to the home tab
  @State() backTab: Tab = { name: '', component: () => null } // essentially null
  @State() cardIsFlippedBack: boolean = false
  @State() rotateDegrees: number = 0

  get activeTab(): Tab {
    return this.cardIsFlippedBack ? this.backTab : this.frontTab
  }

  @Listen('tabChange') onTabChange({ detail: nextTab }: CustomEvent) {
    // Determine the degrees that the card should be rotated
    if (compareTabs(this.activeTab, nextTab) > 0) this.rotateDegrees -= 180
    else this.rotateDegrees += 180

    if (this.cardIsFlippedBack) this.frontTab = nextTab
    else this.backTab = nextTab

    // Flip the card
    this.cardIsFlippedBack = !this.cardIsFlippedBack
  }

  render() {
    return (
      <main class="container">
        <tab-bar activeTab={this.activeTab} tabs={tabs} width={card.width} />
        <flip-card {...card} rotateDegrees={this.rotateDegrees}>
          <div class="card-front" slot="front">
            {this.frontTab.component()}
          </div>
          <div class="card-back" slot="back">
            {this.backTab.component()}
          </div>
        </flip-card>
      </main>
    )
  }
}
