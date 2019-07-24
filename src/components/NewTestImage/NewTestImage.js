import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withToastManager } from 'react-toast-notifications';
import * as newTestImageOperations from '../../redux/newTestImage/newTestImageOperations';

class NewTestImage extends Component {
  state = {
    fetchedDesktopImage: '',
    fetchedMobileImage: '',
  };

  componentDidMount() {
    const { desktopImageName, mobileImageName, fetchImage } = this.props;
    fetchImage(desktopImageName);
    fetchImage(mobileImageName);
    // this.fetchImages(desktopImageName, 'fetchedDesktopImage');
    // this.fetchImages(mobileImageName, 'fetchedDesktopImage');
  }

  addNotification = error => {
    const { toastManager } = this.props;
    toastManager.add(error, {
      appearance: 'error',
      autoDismiss: true,
      pauseOnHover: true,
    });
  };

  //   fetchImages = async (prop, valName) => {
  //     const image = await fetchImage(prop);
  //     if (image.data) {
  //       this.setState({
  //         [valName]: image.data,
  //       });
  //     } else {
  //       this.addNotification(image.data);
  //     }
  //   };

  render() {
    const { fetchedDesktopImage, fetchedMobileImage } = this.state;
    console.log(fetchedDesktopImage);
    return (
      <picture>
        <source media="(min-width: 768px)" srcSet={fetchedDesktopImage} />
        <source media="(min-width: 1280px)" srcSet={fetchedDesktopImage} />
        <img src={fetchedMobileImage} alt="mobileImage" />
      </picture>
    );
  }
}
NewTestImage.propTypes = {
  desktopImageName: PropTypes.string.isRequired,
  mobileImageName: PropTypes.string.isRequired,
};
const mapDispatchToProps = dispatch => ({
  fetchImage: image => dispatch(newTestImageOperations.fetchImage(image)),
});
export default connect(
  null,
  mapDispatchToProps,
)(withToastManager(NewTestImage));
