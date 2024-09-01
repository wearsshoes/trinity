
# Trinity Heresy Project Knowledge

## Project Overview
- This project is a web application that guides users through a series of questions to determine which Trinitarian heresy they align with.
- The core of the application is a state machine that manages the flow of questions and responses.

## Key Components
- State Machine: Defined in `src/state.ts`, manages the application's logic and flow.
- UI: Implemented in `src/main.ts`, renders the current state and options to the user.

## Development Guidelines
- Use TypeScript for type safety.
- Utilize the xstate library for state management.
- Keep the UI in sync with the state machine definition.

## TODO
- Implement full state transitions based on user interactions.
- Consider adding more detailed explanations for each heresy.
- Explore adding visual representations for different heresies.

