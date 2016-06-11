'use strict';

import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import Exponent from 'exponent';
import React from 'react';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Exponent.Font.loadAsync({
      awesome: 'https://github.com/FortAwesome/Font-Awesome/raw/master/fonts/fontawesome-webfont.ttf',
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={{ flex: 1,
                     justifyContent: 'center',
                     alignItems: 'center' }}>
        {
          this.state.fontLoaded ? (
            <Text style={{ ...Exponent.Font.style('awesome'),
                           fontSize: 56 }}>
              {'\uf000'}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => App);