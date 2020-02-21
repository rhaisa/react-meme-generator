import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <div>
      <button className="ButtonGenerate" onClick={props.onClick}>
        <h1 className="Button-Text">Generate Meme</h1>
      </button>

      {/* <button className="ButtonDownlod">
        <h1 className="Button-Text">Download Meme</h1>
      </button> */}
    </div>
  );
}

//   handleChange = selectedOption => {
//     this.setState({ selectedOption }, () =>
//       console.log(`Option selected:`, this.state.selectedOption),
//     );
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//         className="input"
//       />
//     );
//   }
// }
