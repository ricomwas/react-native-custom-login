import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

  const [username, setUsername] = useState('')
  const navigation = useNavigation();


  const onSendPress = () => {
    navigation.navigate('NewPassword')
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput
        placeholder="Enter your username"
        value={username}
        setValue={setUsername}
      />

      <CustomButton
        text="Send"
        onPress={onSendPress}
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

export default ForgotPasswordScreen