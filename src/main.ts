
import './style.css'
import scutum from '/scutum.svg'
import { setupCounter } from './counter.ts'
import { machine } from './state.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://en.wikipedia.org/wiki/Trinity" target="_blank">
      <img src="${scutum}" class="logo" alt="Shield of the Trinity" />
    </a>
    <h1>Which Trinitarian heresy are you?</h1>
    <div class="card">
      <p>${machine.states.Intro.description}</p>
      <button id="accept">${machine.states.Intro.on['Accept and Continue'].target}</button>
      <button id="reject">${machine.states.Intro.on['No, God is dead'].target}</button>
    </div>
    <p class="state-machine">${machine.id}</p>
  </div>
`

const acceptButton = document.querySelector<HTMLButtonElement>('#accept')!
const rejectButton = document.querySelector<HTMLButtonElement>('#reject')!

acceptButton.addEventListener('click', () => {
  console.log('User accepted')
  // TODO: Implement state transition
})

rejectButton.addEventListener('click', () => {
  console.log('User rejected')
  // TODO: Implement state transition
})

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
