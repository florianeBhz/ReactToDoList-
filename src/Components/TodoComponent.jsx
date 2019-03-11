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
import AddForm from './AddForm.jsx';

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: [],
      openSnack: false,
      isItemAdded: false,
      counter: 0
    };
  }

  addItem = () => {
    let newitem = { item: this.state.name, isCompleted: false };
    this.setState({
      list: this.state.list.concat(newitem),
      openSnack: true,
      name: '',
      isItemAdded: true
    });
  };

  handleCheck = (event, index) => {
    //event.preventDefault();
    console.log(index);
    let list = [...this.state.list];
    console.log(list[index]);
    list[index] = { ...list[index], isCompleted: event.target.checked };
    list[index].isCompleted = true;
    this.setState({
      list: [...list],
      openSnack: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      openSnack: false,
      name: '',
      isItemAdded: false
    });
  };

  render() {
    return (
      <div>
        <Paper>
          <Tabs>
            <Tab label="To do">
              <List className="my_list">
                <Subheader>Some tools to learn</Subheader>
                {this.state.list
                  .filter(elem => !elem.isCompleted)
                  .map((elem, index) => (
                    <TodoItem
                      name={elem.item}
                      key={elem.item}
                      handleCheck={event => this.handleCheck(event, index)}
                    />
                  ))}
              </List>
            </Tab>
            <Tab label="Completed">
              <List className="my_list">
                <Subheader>Completed tasks</Subheader>
                {this.state.list
                  .filter(elem => elem.isCompleted)
                  .map(elem => (
                    <ListItem primaryText={elem.item} key={elem.item} />
                  ))}
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
          message={this.state.isItemAdded ? 'New task added' : 'Task completed'}
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
export default TodoComponent;
