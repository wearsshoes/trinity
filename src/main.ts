import { createActor } from 'xstate';
import { machine } from './state';

const actor = createActor(machine);
const app = document.querySelector<HTMLDivElement>('#app');

function updateUI(state: any) {
  console.log('Updating UI. Current state:', state.value);
  if (!app) {
    console.error('App element not found');
    return;
  }

  const { value, context } = state;
  const currentState = typeof value === 'string' ? value : Object.keys(value)[0];
  const stateNode = machine.states[currentState];

  console.log('Getting question text for state:', currentState);
  const description = stateNode.description || '';

  if (currentState === 'result') {
    renderResult(description, context.score);
  } else {
    renderQuestion(currentState, description, Object.keys(stateNode.on || {}));
  }
}

function renderQuestion(state: string, description: string, options: string[]) {
  if (!app) return;
  console.log('Getting options HTML for state:', state);
  app.innerHTML = `
    <h2>${state}</h2>
    <p>${description}</p>
    ${options.map(option => `<button data-event="${option}">${option}</button>`).join('')}
  `;

  const buttons = app.querySelectorAll('button');
  buttons.forEach(button => {
    console.log('Added option button:', button.textContent);
    button.addEventListener('click', () => {
      actor.send({ type: button.dataset.event as any });
    });
  });
}

function renderResult(description: string, score: number) {
  if (!app) return;
  console.log('Rendering result');
  app.innerHTML = `
    <h2>Quiz Complete</h2>
    <p>${description}</p>
    <p>Your score: ${score} out of 4</p>
    <button id="restart">Restart Quiz</button>
  `;

  const restartButton = document.getElementById('restart');
  console.log('Restart button element:', restartButton);
  restartButton?.addEventListener('click', () => {
    console.log('Restart button clicked');
    actor.stop();
    actor.start();
    updateUI(actor.getSnapshot());
  });
}

let previousState: string | null = null;

actor.subscribe((state) => {
  const currentState = JSON.stringify(state.value);
  if (currentState !== previousState) {
    console.log('State changed. Previous:', previousState, 'Current:', currentState);
    updateUI(state);
    previousState = currentState;
  }
});

actor.start();
console.log('Initial state:', actor.getSnapshot().value);
updateUI(actor.getSnapshot());
