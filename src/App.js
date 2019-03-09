import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoComponent from './Components/TodoComponent';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App">
            <div className="my_todo">
              <div className="my_title">React-Material-UI ToDo List </div>
              <TodoComponent />
            </div>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
