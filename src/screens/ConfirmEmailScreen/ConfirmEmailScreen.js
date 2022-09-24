import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

  const [code, setCode] = useState('')
  const navigation = useNavigation();


  const onConfirmPressed = () => {
    navigation.navigate('Home')
  }

  const onResendPressed = () => {
    console.warn("onResendPressed");
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Your Email</Text>

      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />

      <CustomButton
        text="Confirm"
        onPress={onConfirmPressed}
      />
      
      <CustomButton
        text="Resend Code"
        onPress={onResendPressed}
        type="SECONDARY"
      />

      <CustomButton
        text="Back to Sign In"
        onPress={onSignInPress}
        type="TERTIARY"
      />


    

    </View>
    
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'  
  }
});

export default ConfirmEmailScreen