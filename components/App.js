import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ListScreen from './HomeScreen'
import AddScreen from './LinksScreen'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ListScreen />
          <AddScreen />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
});
