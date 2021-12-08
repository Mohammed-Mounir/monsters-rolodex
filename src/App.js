import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState({ monsters: users });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
