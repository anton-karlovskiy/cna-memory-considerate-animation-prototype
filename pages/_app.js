
import React from 'react';
import App from 'next/app';

import AnimationEmulationContext from '../components/AnimationEmulationContext';

class MyApp extends App {
  state = {
    manualEnabled: false,
    isAnimationOn: true
  };

  componentDidMount = () => {
    const manualEnabled = localStorage.getItem('manual-enabled');
    const isAnimationOn = localStorage.getItem('is-animation-on');

    if (manualEnabled) {
      this.setState({manualEnabled});
    }

    if (isAnimationOn) {
      this.setState({isAnimationOn});
    }
  };

  enableManualAnimationHandler = flag => {
    localStorage.setItem('manual-enabled', flag);
    this.setState({manualEnabled: flag});
  };

  toggleAnimationHandler = event => {
    localStorage.setItem('is-animation-on', event.target.checked);
    this.setState({isAnimationOn: event.target.checked});
  };

  render() {
    const { Component, pageProps, router } = this.props;
    const { manualEnabled, isAnimationOn } = this.state;
    return (
      <AnimationEmulationContext.Provider
        value={{
          manualEnabled,
          isAnimationOn,
          enableManualAnimationHandler: this.enableManualAnimationHandler,
          toggleAnimationHandler: this.toggleAnimationHandler
        }}>
          <Component {...pageProps} key={router.route} />
      </AnimationEmulationContext.Provider>
    );
  }
}

export default MyApp;
