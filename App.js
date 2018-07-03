/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
    Button
} from 'react-native';

export default class App extends Component {

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Button title={"FlatListDemo"} onPress={()=>{
          navigation.navigate('FlatListDemo');
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
