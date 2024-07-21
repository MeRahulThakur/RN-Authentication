import { useState } from 'react';
import { ColorSchemeName, Alert, StyleSheet, View, Text } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import FlatButton from '../UI/FlatButton';
import AuthForm from './AuthForm';
//import { Colors } from '../../constants/colors';
import { useTheme } from '../../hooks/useTheme';


interface AuthContentProps {
  isLogin?: boolean,
  onAuthenticate: ({ email, password }: { email: string, password: string }) => void
}

function AuthContent({ isLogin, onAuthenticate }: AuthContentProps) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const { colorScheme } = useTheme()
  const styles = getStyles(colorScheme)

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <View style={styles.authAppLogo}>
        <Text style={styles.brandName}>APP NAME</Text>
      </View>
      <View style={styles.authForm}>
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          <FlatButton onPress={switchAuthModeHandler}>
            {isLogin ? 'Create a new user' : 'Log in instead'}
          </FlatButton>
        </View>
      </View>

    </View>
  );
}

export default AuthContent;

const getStyles = (colorScheme: ColorSchemeName) => {
  return StyleSheet.create({
    authContent: {
      flex: 1,
    },
    authAppLogo: {
      flex: 1/3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    brandName:{
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: 80,
    },
    authForm: {
      flex: 2/3,
      //marginTop: 64,
      marginHorizontal: 32,
      padding: 16,
      borderRadius: 8,
      //backgroundColor: Colors[colorScheme?? 'light'].primary800,
      //elevation: 2,
      //shadowColor: 'black',
      //shadowOffset: { width: 1, height: 1 },
      //shadowOpacity: 0.35,
      //shadowRadius: 4,
    },
    buttons: {
      marginTop: 8,
    },
  });
}