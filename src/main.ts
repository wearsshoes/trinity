import { createActor } from 'xstate';
import { machine } from './state';

let actor = createActor(machine);
const app = document.getElementById('app')!;

function renderState(state: any) {
  const { value, context } = state;
  const currentState = typeof value === 'string' ? value : Object.keys(value)[0];
  const stateNode = machine.states[currentState];
  if (stateNode.type === 'final') {
    renderResult(currentState, stateNode.description, context.score, context.history);
  } else {
    const options = Object.entries(stateNode.on || {})
      .filter(([key]) => key !== 'BACK')
      .map(([key, value]) => ({
        event: key,
        description: value[0].description || key
      }));
    renderQuestion(currentState, stateNode.description, options, context.history);
  }
}

function renderQuestion(state: string, description: string = '', options: { event: string, description: string }[], history: string[]) {
  app.innerHTML = `
    <div id="history-path">Path: ${renderHistoryPath(history)}</div>
    <p>${description}</p>
    ${options.map(option => `<p><button data-event="${option.event}">${option.description}</button></p>`).join('')}
    ${history.length > 0 ? '<p><button id="back-button">Back</button></p>' : ''}
  `;
  const buttons = app.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.id === 'back-button') {
      button.addEventListener('click', () => {
        actor.send({ type: 'BACK' });
      });
    } else {
      button.addEventListener('click', () => {
        actor.send({ type: button.dataset.event as any });
      });
    }
  });
}

function renderResult(state: string, description: string = '', score: number, history: string[]) {
  app.innerHTML = `
    <div id="history-path">Path: ${renderHistoryPath(history)}</div>
    <h2>You are a ${state.toUpperCase()} and must be BURNED at the STAKE!</h2>
    <p>${description}</p>
    <p>You successfully navigated ${score} thorny theological dilemmas.</p>
    <button id="restart">Restart Quiz</button>
  `;
  const restartButton = document.getElementById('restart');
  restartButton?.addEventListener('click', restartQuiz);
}

function renderHistoryPath(history: string[]): string {
  return history.join(' → ');
}

function restartQuiz() {
  actor.stop();
  actor = createActor(machine);
  actor.subscribe(state => {
    renderState(state);
  });
  actor.start();
}

actor.subscribe(state => {
  renderState(state);
});

actor.start();