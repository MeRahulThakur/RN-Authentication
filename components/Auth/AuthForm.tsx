import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../UI/Button';
import Input from './Input';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View>
      <View>
        <Input
          label="Email Address"
          type="email"
          onUpdateValue={updateInputValueHandler}
          value={enteredEmail}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          secure={false}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            type="confirmEmail"
            onUpdateValue={updateInputValueHandler}
            value={enteredConfirmEmail}
            keyboardType="email-address"
            isInvalid={emailsDontMatch}
            secure={false}
          />
        )}
        <Input
          label="Password"
          type="password"
          onUpdateValue={updateInputValueHandler}
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
          keyboardType="default"
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            type="confirmPassword"
            onUpdateValue={updateInputValueHandler}
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
            keyboardType="default"
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});