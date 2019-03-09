import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
      <div className="my_item">
        <ListItem
          primaryText={this.props.name}
          leftCheckbox={<Checkbox />}
          key={this.props.id}
          value={this.props.name}
          onClick={this.handleCheck}
        />
        <Divider />
      </div>
    );
  }
}
TodoItem.propTypes = {
  name: PropTypes.string,
  handleCheck: PropTypes.func
};

export default TodoItem;
