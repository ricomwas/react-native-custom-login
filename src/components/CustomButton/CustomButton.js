import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.container, styles[`container_${type}`],
      bgColor ? {backgroundColor: bgColor} : {  }
    ]}>
      <Text 
        style={[styles.text, styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
      ]}>
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignItems: 'center',
    padding: 15,
    /* margin: 10, */
    marginVertical: 15,
    borderRadius: 25
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 1,
  },
  container_TERTIARY: {
    backgroundColor: '#fff'

  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
  text_TERTIARY: {
    color: 'gray',
    fontWeight: 'bold'
  },
  text_SECONDARY: {
    color: '#3B71F3'
  }

})

export default CustomButton