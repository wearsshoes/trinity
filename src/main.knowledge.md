# main.ts Knowledge

## File Purpose
This file is the main entry point for the Trinity Heresy Quiz application. It handles UI rendering, user interactions, and integrates with the state machine defined in `state.ts`.

## Key Functions
- `updateUI(state)`: Updates the UI based on the current state of the quiz.
- `renderQuestion(state, description, options)`: Renders a question and its options.
- `renderResult(description, score)`: Renders the final result of the quiz.

## State Management
The file uses XState for state management. It creates an actor from the machine defined in `state.ts` and subscribes to state changes.

## UI Rendering
- The UI is rendered dynamically based on the current state.
- Questions and options are generated as buttons within the `#app` div.
- Console logs are used for debugging UI updates and state transitions.

## Event Handling
- Click events on option buttons trigger state transitions.
- A restart button is provided at the end of the quiz to reset the state.
- When restarting, a 'START' event is sent to ensure transition from the initial state.

## Debugging Tips
- Console logs are placed strategically to track state changes and UI updates.
- Check for any errors in the browser console related to DOM manipulation or state transitions.

## TODO
- Implement error handling for edge cases (e.g., missing DOM elements).
- Consider adding more detailed logging for complex state transitions.
- Enhance the UI rendering process for better user experience.

## Restart Functionality
- The restart button creates a new actor instance using `createQuizActor()`.
- No need to explicitly send a 'START' event after creating the new actor, as `createQuizActor()` already starts the actor.
- `updateUI()` is called immediately after creating the new actor to refresh the UI.
