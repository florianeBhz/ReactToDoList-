import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

//others
//import Formsy from 'formsy-react';
//import FormsyText from 'formsy-material-ui/lib/FormsyText';

import PropTypes from 'prop-types';

class AddForm extends Component {
  render() {
    return (
      <div>
        {this.props.value}
        <form className="my_Form">
          <TextField
            hintText="Enter a valid name"
            floatingLabelText="Task name"
            multiLine={true}
            rows={2}
            value={this.props.name}
            onChange={this.props.handleNameChange}
          />
          <IconButton
            onClick={this.props.onAdd}
            disabled={this.props.name === ''}
          >
            <ContentAdd />
          </IconButton>
        </form>
      </div>
    );
  }
}

AddForm.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onCancel: PropTypes.func
};
export default AddForm;
