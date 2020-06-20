import React from 'react';
import Three from './Three';
import './three.css';

class Two extends React.Component {
    state = {
        two_number: 1
      }
    twoNumberAdd = () => {
        this.setState({
            two_number: this.state.two_number + 1
        });
      }
      emitName = () => {
          this.props.onUpdateName('leikai');
      }
      componentDidUpdate() {
        console.log('compoent two update');
      }
    render() {
        return (
            <div>
                <p>props:{this.props.appStateNumber} <button onClick={this.emitName}>emitName</button></p>
                <p>
                组件Two。two_number = [{this.state.two_number}] <button onClick={this.twoNumberAdd}>two_state_number + 1</button>
            </p>
            <div className="three">
                <h4>组件two的子组件</h4>
             <Three></Three>
            </div>
            </div>
        )
    }
}

export default Two;