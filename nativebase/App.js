import React, { Component } from 'react';
import { ImageBackground, Dimensions } from 'react-native'
import {
  Container, Header, Left, Right,
  Content, Body, Title, Icon,
  Footer, FooterTab, Button, Thumbnail
} from 'native-base';

const { width } = Dimensions.get('window')

const backgroundImage = require('./assets/1_a_base_02.png')

export default class App extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <ImageBackground
          source={ backgroundImage }
          style={{ width: '100%', height: '100%' }}>
          <Header style={{ height: 62, width: width, backgroundColor: 'transparent', marginTop: 0, marginBottom: 1, paddingLeft: 0, paddingRight: 0, borderBottomColor: '#FFF', borderBottomWidth: 1 }}>
            <Left/>
            <Body >
              <Title style={{ marginTop: 15 }}>
                <Thumbnail square style={{ width: 60, height: 60, borderWidth: 1, borderRadius: 5, borderColor: '#FFF' }}
                  source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530995250/App%20Icons/1024x1024_opt3.png'}} />
              </Title>
            </Body>
            <Right />
          </Header>
          <Content style={{ borderColor: '#FFF', borderBottomWidth: 1 }}>
          </Content>
          <Footer style={{ height: 70, backgroundColor: 'transparent' }}>
            <FooterTab>
              <Button>
                <Thumbnail round source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530996064/App%20Icons/Home_Icon.png'}} />
              </Button>
              <Button>
                <Thumbnail round source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530996065/App%20Icons/Add_Event_Icon.png'}} />
              </Button>
              <Button>
                <Thumbnail round source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530996063/App%20Icons/My_Events_Icon.png'}} />
              </Button>
              <Button>
                <Thumbnail round source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530996065/App%20Icons/My_Messages_Icon.png'}} />
              </Button>
              <Button>
                <Thumbnail round source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530996065/App%20Icons/My_Profile_Icon.png'}} />
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}
