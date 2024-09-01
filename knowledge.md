
# Trinity Heresy Quiz Project

## Project Overview
This project is a quiz application that determines which Trinitarian heresy the user's beliefs align with. It uses a state machine to manage the quiz flow and TypeScript for type safety.

## Key Components
- `src/main.ts`: Main entry point of the application, handles UI rendering and user interactions.
- `src/state.ts`: Defines the state machine for the quiz using XState.
- `index.html`: Contains the basic HTML structure and the target div for the quiz content.
- `src/style.css`: Provides styling for the quiz interface.

## Development Guidelines
- Use TypeScript for type safety.
- State management is handled through XState.
- UI updates should be driven by the current state of the state machine.
- Maintain separation of concerns between state management (state.ts) and UI rendering (main.ts).

## Key Concepts
- Trinitarian heresies: Various historical misunderstandings or alternative interpretations of the Christian doctrine of the Trinity.
- State machine: A model of computation based on a hypothetical machine made of one or more states, used here to manage the quiz flow.

## Debugging Tips
- Use console.logs strategically to track state changes and UI updates.
- Check the browser's developer tools for any JavaScript errors or unexpected behavior.
- Verify that DOM elements are being created and appended correctly.

## TODO
- Implement full quiz functionality
- Add more detailed explanations for each heresy
- Consider adding a scoring system or more nuanced results
- Enhance UI/UX design
