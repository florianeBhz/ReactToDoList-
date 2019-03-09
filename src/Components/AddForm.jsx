import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

//others
//import Formsy from 'formsy-react';
//import FormsyText from 'formsy-material-ui/lib/FormsyText';

import PropTypes from 'prop-types';

class AddForm extends Component {
  render() {
    return (
      <div>
        {this.props.value}
        <TextField
          hintText="Enter a valid name"
          floatingLabelText="Task name"
          multiLine={true}
          rows={2}
          value={this.props.name}
          onChange={this.props.handleNameChange}
        />
        <br />
      </div>
    );
  }
}

AddForm.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func
};
export default AddForm;
