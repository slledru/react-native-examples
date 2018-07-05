/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Button, CameraRoll, Image, ScrollView, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { photos: [] }
  }

  _handleButtonPress = (event) => {
    const cameraRoll = new CameraRoll()
    console.log(CameraRoll)
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then((r) => {
        console.log('r', r)
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
        console.log('err', err)
          //Error Loading Images
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
          return (
            <Image
              key={i}
              style={{
                width: 300,
                height: 100,
              }}
              source={{ uri: p.node.image.uri }}
            />
          );
        })}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 100
  }
}

export default App
