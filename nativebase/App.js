import React, { Component } from 'react';
import {
  Container, Header, Left, Right,
  Content, Body, Title, Icon,
  Footer, FooterTab, Button, Thumbnail
} from 'native-base';
export default class App extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title style={{ marginTop: 20 }}>
              <Thumbnail square
                source={{uri: 'https://res.cloudinary.com/drf6ttx34/image/upload/v1530995250/App%20Icons/1024x1024_opt3.png'}} />
            </Title>
          </Body>
          <Right />
        </Header>
        <Content />
        <Footer style={{ height: 70 }}>
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
      </Container>
    );
  }
}
