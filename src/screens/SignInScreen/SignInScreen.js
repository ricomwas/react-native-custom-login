import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/credit-vestor-symbol.svg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign In");
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password")
  }

  const onSignInFacebook = () => {
    console.warn("Facebook Login")
  }

  const onSignInGoogle = () => {
    console.warn("Google Login")
  }

  const onSignInTwitter = () => {
    console.warn("Twitter Login")
  }

  const onSignUpPress = () => {
    console.warn("onSignUpPress")
  }


  return (
    <ScrollView>
      <View style={styles.root}>
      <View style={styles.logo}>
        <Logo height={height * 0.3}/>
      </View> 
      
      <CustomInput
        placeholder="username"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton
        text="Sign In"
        onPress={onSignInPressed}
      />
      
      <CustomButton
        text="Forgot Password"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />

      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <CustomButton
        text="Sign In with Twitter"
        onPress={onSignInTwitter}
        bgColor="#E3E3E3"
        fgColor="#363636"
      />

      <CustomButton
        text="Don`t have an account? Create one"
        onPress={onSignUpPress}
        type="TERTIARY"
      />

    </View>
      
    </ScrollView>
    
  )
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  logo: {
    width: '40%',
    maxWidth: 300,
    maxHeight: 300,
    margin: 20

  }
});


export default SignInScreen