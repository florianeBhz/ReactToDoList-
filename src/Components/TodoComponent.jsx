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

import _ from 'underscore';

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
    let newitem = { id: counter++, item: this.state.name, isCompleted: false };
    this.setState({
      list: this.state.list.concat(newitem),
      openSnack: true,
      name: '',
      isItemAdded: true
    });
  };

  handleCheck = event => {
    if (!_.isNull(event && !_.isNull(event.target))) {
      if (!_.isNull(this.state.list)) {
        console.log(this.state.list);
        let checked = _.findWhere(this.state.list, { id: event.target.value });
        if (!_.isUndefined(checked)) {
          console.log(checked);
          let completed = {
            id: checked.id,
            name: checked.name,
            isCompleted: true
          };
          let newlist = _.reject(this.state.list, function(el) {
            return el.id === checked.id;
          });
          newlist = newlist.concat[completed];
          this.setState({
            list: newlist,
            openSnack: true
          });
        }
      }
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
