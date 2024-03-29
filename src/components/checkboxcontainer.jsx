import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checkbox';
import cocktails from './data.js'


class CheckboxContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        checkedItems: new Map(),
      }
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }
  
    render() {
      return (
        <React.Fragment>
          {
            cocktails.map(item => (
              <label key={item.key}>
                {item.name}
                <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
              </label>
            ))
          }
        </React.Fragment>
      );
    }
  }
  
  export default CheckboxContainer;