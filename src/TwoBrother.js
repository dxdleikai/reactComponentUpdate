import React from 'react';

class TwoBrother extends React.Component {
  componentDidUpdate() {
    console.log('component app_brother update');
  }
  render() {
    return (
      <div>
          <p>
             组件Two的兄弟组件。
          </p>
      </div>
    )
  }
}

export default TwoBrother;
