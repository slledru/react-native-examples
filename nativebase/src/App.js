import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base';

import AppContainer from './components/AppContainer'

export default class App extends Component {
  render() {
    return (
      <AppContainer style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the first line</Text>
        <Text>This is the second line</Text>
        <Text>This is the third line</Text>
        <Text>This is the fourth line</Text>
      </AppContainer>
    )
  }
}
