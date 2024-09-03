
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

function renderQuestion(_state: string, description: string = '', options: { event: string, description: string }[], history: string[]) {
  app.innerHTML = `
    <div class="quiz-container">
      <div class="question">
        <h2>${description}</h2>
        <div class="options">
          ${options.map(option => `<button class="option-btn" data-event="${option.event}">${option.description}</button>`).join('')}
        </div>
        ${history.length > 0 ? '<button id="back-button" class="back-btn">Back</button>' : ''}
        </div>
        <br>
        <div class="history-path">Path: ${renderHistoryPath(history)}</div>
    </div>
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
    <div class="quiz-container result">
      <h2 class="result-title">You are a(n) ${state.toUpperCase()}!</h2>
      <p class="result-description">${description}</p>
      <p class="score">You successfully navigated ${score} thorny theological dilemmas.</p>
      <button id="restart" class="restart-btn">Restart Quiz</button>
      <br>
      <br>
      <div class="history-path">Path: ${renderHistoryPath(history)}</div>
      </div>
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
