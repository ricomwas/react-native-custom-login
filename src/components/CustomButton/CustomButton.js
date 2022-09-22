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
    backgroundColor: '#3B71F3',
    width: 400,
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 25
  },
  container_PRIMARY: {
    
  },
  container_TERTIARY: {
    backgroundColor: '#fff'

  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
  },
  text_TERTIARY: {
    color: 'gray'
  }

})

export default CustomButton