import React, { Component } from 'react';
import './App.css';
import CircleSelectors from './component/CircleSelector/CircleSelector';
import Circles from './component/Circles/Circles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCircle: "1",
      circles: [1,2,3,4]
     }

this.selectCircle = this.selectCircle.bind(this);
  }

selectCircle (id) {
  console.log(`Button Clicked + ${id}`);
this.setState({currentCircle: id})
console.log(this.state.currentCircle)
} 

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
         <CircleSelectors circles={this.state.circles}  currentCircle={this.state.currentCircle} selectCircle={this.selectCircle} />
         <Circles circles={this.state.circles} currentCircle={this.state.currentCircle}  />
        </main>
      </div>
    );
  }
}

export default App;