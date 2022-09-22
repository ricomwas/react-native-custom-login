import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


const CustomInput = ({ value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,

  },
  input: {
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 15,
    
  },
});

export default CustomInput