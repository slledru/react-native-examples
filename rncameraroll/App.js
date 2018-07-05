/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Button, CameraRoll, Image, ScrollView,
  View, Modal, TouchableHighlight, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      photos: [],
      index: null
    }
  }

  setIndex = (index) => {
    if (index === this.state.index) {
      index = null
    }
    this.setState({ index })
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleButtonPress = () => {
    const cameraRoll = new CameraRoll()
    console.log(CameraRoll)
    CameraRoll.getPhotos({
      groupTypes: 'All',
      first: 100,
      assetType: 'Photos',
    })
      .then((r) => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
        console.log('err', err)
          //Error Loading Images
      })
  }

  uploadToCloud = () => {
    console.log('uploadToCloud')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Load Images" onPress={() => { this.toggleModal(); this.handleButtonPress() }} />
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('closed')}>
          <View style={styles.modalContainer}>
             <Button
               title='Close'
               onPress={() => { this.toggleModal(); this.uploadToCloud() }}
             />
            <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{opacity: i === this.state.index ? 0.5 : 1}}
                      key={i}
                      underlayColor='transparent'
                      onPress={() => this.setIndex(i)}
                    >
                      <Image
                        style={{
                          width: width / 3 - 5,
                          height: width / 3 - 5,
                          margin: 2
                        }}
                        source={{uri: p.node.image.uri}}
                      />
                    </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
}

export default App
