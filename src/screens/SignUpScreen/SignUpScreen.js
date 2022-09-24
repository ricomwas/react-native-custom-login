import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();



  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail')
  }

  const onTermsOfUse = () => {
    console.warn("onTermOfUsedPressed");
  }

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an Account</Text>
      
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomInput
        placeholder="Confirm Password"
        value={confirmpassword}
        setValue={setConfirmPassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="Register"
        onPress={onRegisterPressed}
      />

      <Text style={styles.text}>
        By registering, you confirm to that you accept our{' '} 
        <Text style={styles.link} onPress={onTermsOfUse}>Terms of Use</Text> and {''} 
        <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
      </Text>

      <SocialSignInButtons />

      <CustomButton
        text="Have an account? Sign In"
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


export default SignUpScreen