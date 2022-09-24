import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {


  const onSignInFacebook = () => {
    console.warn("Facebook Login")
  }

  const onSignInGoogle = () => {
    console.warn("Google Login")
  }

  const onSignInTwitter = () => {
    console.warn("Twitter Login")
  }
  return (
    <Fragment>
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
  
    </Fragment>
      
    

  );
}

export default SocialSignInButtons