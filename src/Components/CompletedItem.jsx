import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionSettingsBackupRestore from 'material-ui/svg-icons/action/settings-backup-restore';

import { indigo500, red500 } from 'material-ui/styles/colors';

class TodoItem extends Component {
  render() {
    return (
      <div className="my_completed_item">
        <ListItem
          hoverColor={'#fff'}
          primaryText={this.props.name}
          value={this.props.name}
          leftIcon={
            <ActionSettingsBackupRestore
              color={indigo500}
              onClick={this.props.handleUndo}
            />
          }
          rightIcon={
            <ActionDelete color={red500} onClick={this.props.handleRemove} />
          }
        />
        <Divider />
      </div>
    );
  }
}
TodoItem.propTypes = {
  name: PropTypes.string,
  handleRemove: PropTypes.func,
  handleUndo: PropTypes.func
};

export default TodoItem;
