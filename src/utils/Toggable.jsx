import React from 'react';
import PropTypes from 'prop-types';

// render-props, переключатель
class Toggable extends React.Component {
  state = {
    isToggle: false,
  };

  handleToggle = () => this.setState(state => ({ isToggle: !state.isToggle }));

  render() {
    const { isToggle } = this.state;
    const { children } = this.props;
    return children({ isToggle, toggle: this.handleToggle });
  }
}
Toggable.propTypes = {
  children: PropTypes.func.isRequired,
};
export default Toggable;
