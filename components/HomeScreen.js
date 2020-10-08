import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    TextInput,
    FlatList,
    Button,
    CheckBox,
  AsyncStorage,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MonoText } from '../components/Add';





export default class ListScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  addNewList = () => {
    if(this.state.newTask) {
      this.props.addList(this.state.newTask);
      this.setState({
        newTask: ''
      });
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>TO DO</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput placeholder='I have to do...' value={this.state.newTask}
                         onChangeText={(newTask) => this.setState({newTask})}
                         autoCorrect={ false }
                         style={styles.getStartedText}></TextInput>
              <TouchableOpacity onPress={this.addNewList} style={styles.getStartedAddBut}>
                <Text style={{fontSize:20}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeText: {
    width: 100,
    height: 80,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
    color: '#770055',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 25,
  },
  getStartedAddBut: {
    backgroundColor: "#fff0f5",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    flex: 1,
  },

  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    flex: 9,
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: "#fff0f5",
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
