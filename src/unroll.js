import React from 'react';

class SpiralTraversal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      resultArray: []
    };
  }

  componentDidMount() {
    this.unrollMatrix(this.state.matrix);
  }

  unrollMatrix(square) {
    if (!square || square.length === 0) {
      this.setState({ resultArray: [] });
      return;
    }

    const rows = square.length;
    const cols = square[0].length;
    const result = [];

    let topRow = 0,
      bottomRow = rows - 1,
      leftCol = 0,
      rightCol = cols - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse top row from left to right
      for (let i = leftCol; i <= rightCol; i++) {
        result.push(square[topRow][i]);
      }
      topRow++;

      // Traverse right column from top to bottom
      for (let i = topRow; i <= bottomRow; i++) {
        result.push(square[i][rightCol]);
      }
      rightCol--;

      // Traverse bottom row from right to left
      if (topRow <= bottomRow) {
        for (let i = rightCol; i >= leftCol; i--) {
          result.push(square[bottomRow][i]);
        }
        bottomRow--;
      }

      // Traverse left column from bottom to top
      if (leftCol <= rightCol) {
        for (let i = bottomRow; i >= topRow; i--) {
          result.push(square[i][leftCol]);
        }
        leftCol++;
      }
    }

    this.setState({ resultArray: result });
  }

  render() {
    const { resultArray } = this.state;
    return (
      <div>
        <h2>Spiral Traversal Result:</h2>
        <p>{resultArray.join(', ')}</p>
      </div>
    );
  }
}

export default SpiralTraversal;