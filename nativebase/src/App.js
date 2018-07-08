import React, { Component } from 'react';
import { ImageBackground, Dimensions } from 'react-native'
import {
  Container, Header, Left, Right,
  Content, Body, Title, Icon,
  Footer, FooterTab, Button, Thumbnail
} from 'native-base';

import FooterMenu from './components/FooterMenu'
import HeaderMenu from './components/HeaderMenu'

const { width } = Dimensions.get('window')

const backgroundImage = require('../assets/1_a_base_02.png')

export default class App extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <ImageBackground
          source={ backgroundImage }
          style={{ width: '100%', height: '100%' }}>
          <HeaderMenu />
          <Content style={{ borderColor: '#FFF', borderBottomWidth: 1 }}>
          </Content>
          <FooterMenu />
        </ImageBackground>
      </Container>
    );
  }
}
