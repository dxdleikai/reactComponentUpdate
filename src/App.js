import React from 'react';
import './App.css';
import Two from './Two';
import TwoBrother from './TwoBrother';

class App extends React.Component {
  state = {
    app_number: 1
  }
  appNumberAdd = () => {
    this.setState({
      app_number: this.state.app_number + 1
    });
  }
  updateName(arg) {
    console.log(arg);
  }
  componentDidUpdate() {
    console.log('component app update');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>APP</h4>
          <p>
             app_number = [{this.state.app_number}]
             <button onClick={this.appNumberAdd}>app_state_number + 1</button>
          </p>
          <div className="two">
              <h4>APP的子组件</h4>
              <TwoBrother></TwoBrother>
              <Two appStateNumber={this.state.app_number} onUpdateName={this.updateName}></Two>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
