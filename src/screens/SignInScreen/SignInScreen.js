import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/images/credit-vestor-symbol.svg'


const SignInScreen = () => {

  const { height } = useWindowDimensions();
  return (
    <View>
      <View style={styles.logo}>
        <Logo height={height * 0.3}/>
      </View>  
      

    </View>
  )
};

const styles = StyleSheet.create({
  logo: {
    width: '40%',
    maxWidth: 300,
    maxHeight: 300,
    alignSelf: 'center',
    padding: 20

  }
});


export default SignInScreen