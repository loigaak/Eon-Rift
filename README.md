# Eon Rift

Eon Rift is a unique JavaScript-based puzzle game where players align rift nodes to stabilize dimensional rifts. Match node states (core, edge, void) in adjacent grid cells to form connections, earning points and advancing through eon stages. Built with Node.js and the `canvas` library, this game is designed for developers seeking a modular, extensible project.

## Features
- **Dimensional Gameplay**: Align nodes with matching states (core, edge, void) horizontally or vertically to stabilize rifts.
- **Eon Stages**: Progress through stages as you score, increasing node counts and flux levels.
- **Modular JavaScript**: Clean, object-oriented code for seamless integration and extension.
- **Canvas Rendering**: Server-side rendering with the `canvas` library, suitable for desktop or web applications.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/eon-rift.git
   ```
2. Navigate to the project directory:
   ```bash
   cd eon-rift
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the game:
   ```bash
   npm start
   ```

## How to Play
- **Objective**: Align adjacent nodes with the same state (core: pink, edge: blue, void: teal) horizontally or vertically by cycling their states.
- **Scoring**: Each rift connection earns 50 points multiplied by the current stage.
- **Stage Progression**: Reach 500 points per stage to advance, increasing node count and flux levels.
- **Interaction**: Use `game.handleClick(x, y)` to cycle node states (requires UI integration).
- **Reset**: Call `game.reset()` to restart the game.

## Development
- **Tech Stack**: Node.js, JavaScript, `canvas`
- **Dependencies**: `canvas` for rendering
- **Code Structure**:
  - `index.js`: Main game logic and canvas rendering.
  - `node.js`: RiftNode class for dimensional entities.
  - `package.json`: Project metadata and dependencies.
- **Extending**: Integrate with a UI framework (e.g., Electron for desktop or a web server) to handle input and display the canvas.

## Notes
- The current implementation outputs a PNG snapshot (`output.png`) for testing. For interactive play, integrate with a UI framework to handle mouse clicks and real-time rendering.
- Example integration: Use Electron for a desktop app or a WebSocket server for web-based play.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. For major updates, open an issue first to discuss your ideas.

## Support
If you enjoy Eon Rift and want to support its development, consider sponsoring me on [GitHub Sponsors](https://github.com/sponsors/loigaak). Your support helps keep this project alive and growing!

## License
MIT License. See [LICENSE](LICENSE) for details.
