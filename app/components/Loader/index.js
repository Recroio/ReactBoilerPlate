/**
 *
 * Loader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Loader.style.less';
import { toggleBoolCB } from './selectors';
/* eslint-disable react/prefer-stateless-function */

class Loader extends React.Component {
  render() {
    const { toggleBool } = this.props;
    if (toggleBool) {
      return (
        <div className="loader-container">
          <p>Loading</p>
        </div>
      );
    }
    return null;
  }
}

Loader.propTypes = {
  toggleBool: PropTypes.bool,
};
const mapStateToProps = createStructuredSelector({
  toggleBool: toggleBoolCB(),
});

export default connect(mapStateToProps)(Loader);
