import React from 'react';

class Three extends React.Component {
    state = {
        three_number: 1
      }
    threeNumberAdd = () => {
        this.setState({
          three_number: this.state.three_number + 1
        });
      }
      componentDidUpdate() {
        console.log('compoent three update');
      }
    render() {
        return (
            <div>
            <p>
             组件three。three_number = [{this.state.three_number}] <button onClick={this.threeNumberAdd}>three_state_number + 1</button>
          </p>
            </div>
        )
    }
}

export default Three;