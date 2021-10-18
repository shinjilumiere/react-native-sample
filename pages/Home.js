import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import logo from "../assets/images/logo.png";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} alt="Logo" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300
  },
});

export default Home;
