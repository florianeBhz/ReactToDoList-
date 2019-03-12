import React, { Component } from 'react';
//material-ui
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { Tabs, Tab } from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';

//others
//my own Components
import TodoItem from './TodoItem.jsx';
import CompletedItem from './CompletedItem.jsx';
import AddForm from './AddForm.jsx';

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: [],
      openSnack: false,
      isItemAdded: false,
      snackMessage: ''
    };
  }

  addItem = () => {
    let newitem = { item: this.state.name, isCompleted: false };
    this.setState({
      list: this.state.list.concat(newitem),
      openSnack: true,
      name: '',
      isItemAdded: true,
      snackMessage: 'New item added'
    });
  };

  handleCheck = (event, index) => {
    event.preventDefault();
    let list = [...this.state.list];
    list[index].isCompleted = true;
    this.setState({
      list: [...list],
      openSnack: true,
      snackMessage: 'Task completed'
    });
  };

  handleUndo = index => {
    let list = [...this.state.list];
    list[index].isCompleted = false;
    this.setState({
      list: [...list],
      openSnack: true,
      snackMessage: 'Roll back succeed'
    });
  };

  handleRemove = index => {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: [...list],
      openSnack: true,
      snackMessage: 'Task removed'
    });
  };

  handleRequestClose = () => {
    this.setState({
      openSnack: false,
      name: '',
      isItemAdded: false,
      snackMessage: ''
    });
  };

  render() {
    let list = { ...this.state.list };
    return (
      <div className="my_todo">
        <Paper>
          <Tabs className="my_tabs">
            <Tab label="To do">
              <List className="my_list">
                <Subheader>Some tools to learn</Subheader>
                {this.state.list.map((elem, index) =>
                  !elem.isCompleted ? (
                    <TodoItem
                      name={elem.item}
                      key={elem.item}
                      handleCheck={event => this.handleCheck(event, index)}
                    />
                  ) : null
                )}
              </List>
            </Tab>
            <Tab label="Completed">
              <List className="my_list">
                <Subheader>Completed tasks</Subheader>
                {this.state.list.map((elem, index) =>
                  elem.isCompleted ? (
                    <CompletedItem
                      name={elem.item}
                      key={elem.item}
                      handleRemove={() => this.handleRemove(index)}
                      handleUndo={() => this.handleUndo(index)}
                    />
                  ) : null
                )}
              </List>
            </Tab>
          </Tabs>
          <AddForm
            name={this.state.name}
            handleNameChange={event =>
              this.setState({ name: event.target.value })
            }
            onAdd={this.addItem}
          />
        </Paper>
        <Snackbar
          open={this.state.openSnack}
          message={this.state.snackMessage}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
export default TodoComponent;
