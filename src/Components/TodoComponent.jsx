import React, { Component } from 'react';
//material-ui
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

//others
//my own Components
import TodoItem from './TodoItem.jsx';
import AddForm from './AddForm.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddindRight: 100,
    paddindBottom: 50
  },
  button: {
    marginLeft: 200,
    marginRight: 30,
    marginBottom: 50,
    marginTop: 50
  }
};

let counter = 1;

class TodoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddFormOpened: false,
      name: '',
      list: []
    };
  }

  addItem = () => {
    let newitem = [{ id: counter++, item: this.state.name, finished: false }];
    this.setState({
      isAddFormOpened: false,
      list: this.state.list.concat(newitem),
      name: ''
    });
  };

  openForm = () => {
    this.setState({
      isAddFormOpened: true
    });
  };

  closeForm = () => {
    this.setState({
      isAddFormOpened: false,
      name: ''
    });
  };

  handleCheck = id => {
    this.setState({
      isAddFormOpened: false,
      name: ''
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={true}
        onClick={this.closeForm}
      />,
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onClick={this.addItem}
        disabled={this.state.name === ''}
      />
    ];

    return (
      <div className="my_list" style={styles.root}>
        <Paper>
          <List>
            <Subheader>Some Front-end tools to learn</Subheader>
            {this.state.list.map(elem => {
              return (
                <TodoItem
                  name={elem.item}
                  key={elem.id}
                  handleCheck={this.handleCheck}
                />
              );
            })}
          </List>
          <RaisedButton
            label="Add"
            primary={true}
            style={styles.button}
            onClick={this.openForm}
          />
        </Paper>

        <Dialog
          title="Add new item"
          actions={actions}
          modal={false}
          open={this.state.isAddFormOpened}
          onRequestClose={this.closeForm}
        >
          <AddForm
            name={this.state.name}
            handleNameChange={event =>
              this.setState({ name: event.target.value })
            }
          />
        </Dialog>
      </div>
    );
  }
}
export default TodoComponent;
