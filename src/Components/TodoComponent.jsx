import React, { Component } from 'react';
//material-ui
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { Tabs, Tab } from 'material-ui/Tabs';
import Snackbar from 'material-ui/Snackbar';

//others
import _ from 'underscore';

//my own Components
import TodoItem from './TodoItem.jsx';
import AddForm from './AddForm.jsx';

let counter = 1;

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: [],
      openSnack: false,
      isItemAdded: false
    };
  }

  addItem = () => {
    let newitem = [
      { id: counter++, item: this.state.name, isCompleted: false }
    ];
    this.setState({
      list: this.state.list.concat(newitem),
      openSnack: true,
      name: '',
      isItemAdded: true
    });
  };

  handleCheck = event => {
    let checked = this.state.list.find(el => (el.id = event.target.value));
    if (checked != null) {
      let newchecked = { ...checked };
      newchecked.isCompleted = true;
      this.setState({
        list: _.reject(this.state.list, el => {
          return el.id === checked.id;
        }).concat(newchecked),
        openSnack: true
      });
    }
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
                  .map(elem => (
                    <TodoItem
                      name={elem.item}
                      id={elem.id}
                      key={elem.id}
                      onClick={event => this.handleCheck}
                      handleCheck={event => this.handleCheck(event)}
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
                    <ListItem primaryText={elem.item} key={elem.id} />
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
