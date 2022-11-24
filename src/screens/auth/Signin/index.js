import React from 'react';
import { Text, ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button/index';
import {styles} from './styles';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  
  const onSignUp = () => {};
    console.log('HOLA');
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />
      
      <Input label="Email" placeholder={'example@gmail.com'} />
      <Input isPassword label="Password" placeholder={'*********'} />
      
      <Button style={styles.button} title="Sign In" />
      <Seperator text="Or sign in with" />
      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink} onPress={onSignUp}>
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signin;
