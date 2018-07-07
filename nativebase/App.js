import React, { Component } from 'react';
import { ImageBackground } from 'react-native'
import {
  Container, Header, Left, Right,
  Content, Body, Title, Icon,
  Footer, FooterTab, Button, Thumbnail
} from 'native-base';
export default class App extends Component {
  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <ImageBackground
          source={{ uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530998057/App%20Icons/1.a_base-02.png' }}
          style={{ width: '100%', height: '100%' }}>
          <Header  style={{ height: 55, backgroundColor: 'transparent' }}>
            <Left/>
            <Body >
              <Title style={{ marginTop: 15 }}>
                <Thumbnail square style={{ borderWidth: 1, borderColor: '#FFF' }}
                  source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530995250/App%20Icons/1024x1024_opt3.png'}} />
              </Title>
            </Body>
            <Right />
          </Header>
          <Content>
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
