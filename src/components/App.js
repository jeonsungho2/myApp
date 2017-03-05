import React from 'react';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        name: ''
      };

      this.setName = this.setName.bind(this);

    }

    setName() {
      this.setState({
        name: '전성호'
      });
    }

    render(){

        return (
            <div>
              <button onClick={this.setName} >click</button>
              <h1>My Name is {this.state.name}ssss</h1>
            </div>
        );
    }
}

export default App;
