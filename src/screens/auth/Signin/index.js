import React, {useContext, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button/index';
import {styles} from './styles';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {login} from '../../../utils/backendCalls';
import {UserContext} from '../../../../App';

const Signin = ({navigation}) => {
  const [values, setValues] = useState({});
  const {setUser} = useContext(UserContext);

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onSubmit = async () => {
    const token = await login(values);
    setUser({token});
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />

        <Input
          value={values.email}
          onChangeText={v => onChange('email', v)}
          label="Email"
          placeholder={'example@gmail.com'}
        />
        <Input
          value={values.password}
          onChangeText={v => onChange('password', v)}
          isPassword
          label="Password"
          placeholder={'*********'}
        />

        <Button onPress={onSubmit} style={styles.button} title="Sign In" />
        <Seperator text="Or sign in with" />
        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an account?
          <Text style={styles.footerLink} onPress={onSignUp}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
