import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require('../../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgLogo: {
      width: 320,
      height: 150,
    },
  });