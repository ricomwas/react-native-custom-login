import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/credit-vestor-symbol.svg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';



const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user first
    navigation.navigate('Home')
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const onSignUpPress = () => {
    navigation.navigate('SignUp')
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
        
        <SocialSignInButtons />
        
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
    width: '50%',
    maxWidth: 300,
    maxHeight: 300,
    /* margin: 20 */

  }
});


export default SignInScreen