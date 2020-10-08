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
import {MaterialCommunityIcons} from "./HomeScreen";

export default class AddScreen extends Component {
  state = [
        {
          text: '할일 1',
          completed: false,
        },
        {
          text: '할일 2',
          completed: true,
        },
        {
          text: '할일 3',
          completed: false,
        },
      ]

  render() {
    <View style={styles.listContainer}>
      {
        this.state.map(data => (
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  {
                    data.completed
                        ? <MaterialCommunityIcons size={20} name='checkbox-marked-circle-outline' />
                        : <MaterialCommunityIcons size={20} name='checkbox-blank-circle-outline' />
                  }
                </TouchableOpacity>
                <Text>{data.text}</Text>
              </View>
              <TouchableOpacity>
                <MaterialCommunityIcons style={styles.listDelBut} size={30} name='delete-outline' />
              </TouchableOpacity>
            </View>
        ))
      }
    </View>
  }

}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 50,
  },
  listDelBut: {

  },
});