import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text 
        style={styles.text}>
        Welcome to the Home Page
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#051c60',
    padding: 20,
    margin: 20
  }
});

export default Home