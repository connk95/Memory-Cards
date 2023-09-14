# Memory Cards Project

Welcome to the Memory Cards project! This project is designed to help you enhance your memory and cognitive skills using a digital version of a classic memory card game. The game requires you to remember which cards you have already selected, and determine which cards are new, testing your memory and concentration.

## Table of Contents

- [Features](https://github.com/connk95/Memory-Cards/blob/main/README.md#features)
- [Demo](https://github.com/connk95/Memory-Cards/blob/main/README.md#features)
- [Installation](https://github.com/connk95/Memory-Cards/blob/main/README.md#installation)
- [Code Description](https://github.com/connk95/Memory-Cards/blob/main/README.md#code-description)
- [Usage](https://github.com/connk95/Memory-Cards/blob/main/README.md#usage)
- [Contributing](https://github.com/connk95/Memory-Cards/blob/main/README.md#contributing)
- [License](https://github.com/connk95/Memory-Cards/blob/main/README.md#license)
- [Acknowledgements](https://github.com/connk95/Memory-Cards/blob/main/README.md#acknowledgements)

## Features

- Click the flag of each country to improve your score, buyt be careful not to select the same flag twice.
- The number of cards will increas by 2 each round.
- The high score is saved between games, so you can keep track of how well you've done.

## Demo

https://connk95.github.io/Memory-Cards/

## Installation

1. Clone this repository using the following command:
   ```
   git clone https://github.com/connk95/Memory-Cards.git
   ```

2. Navigate to the project directory:
   ```
   cd Memory-Cards
   ```

3. Run the app and view in your browser:
   ```
   npm start
   ```

## Code Description

[App.js](https://github.com/connk95/Memory-Cards/blob/main/src/App.js) - Contains states for the array of cards selected this round, level, cards currently displayed, the current score, and the high score. This module also contains the function for determining the number of cards being displayed, a function to shuffle the cards every time a card is clicked, and a function which checks if the card clicked is a duplicate, in which case the game will reset. The number of cards displayed each round can easily be modified using a different algorithm. This module renders the Gameboard component.

[Gameboard.js](https://github.com/connk95/Memory-Cards/blob/main/src/Components/Layout/Gameboard.js) - Renders the title screen when the level is set to 0, and renders cards on the gameboard when the level is 1 or higher. The number of cards is determined by the level. The title screen shows the high score, a start button, and instructions.

[Header.js](https://github.com/connk95/Memory-Cards/blob/main/src/Components/Layout/Header.js) - Renders the current and high score in the header.

[Instructions.js](https://github.com/connk95/Memory-Cards/blob/main/src/Components/Layout/Instructions.js) - This component is displayed with a toggle when clicking the instructions button.

[Card.js](https://github.com/connk95/Memory-Cards/blob/main/src/Components/Cards/Card.js) - Contains a function to add the selected card to the list of selected cards for this round. This component displays an image of a country's flag.

[Flags.js](https://github.com/connk95/Memory-Cards/blob/main/src/Components/Cards/Flags.js) - Contains an array of objects, each of which has the property of "flag" which is the name of the country, and "asset" which is an imported asset.

[Shuffle.js](https://github.com/connk95/Memory-Cards/blob/main/src/Components/Utilities/Shuffle.js) - Contains the function to shuffle cards in the "CurrentCards" array in App.js.

[App.css](https://github.com/connk95/Memory-Cards/blob/main/src/App.css) - All CSS for this project.


## Usage

1. Click on the "Start" button to begin the game. Alternatively, you may click "Instructions" for stylized instructions for the game.
2. Click on a flag to inprove your score.
3. If you click all of the displayed flags without any duplicates, you will move to the next round, where the number of flags will increase by 2.
4. If you click a duplicate flag, you will be sent back to the title screen.
5. Your high score is displayed in the top-right. 


## Contributing

Contributions to this project are welcome! If you find any bugs or have ideas for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was created by Connor Ketcheson.

If you have any questions or feedback, please don't hesitate to contact us.

---
