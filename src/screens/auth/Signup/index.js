import React, {useContext, useState} from 'react';
import {View, Pressable, Text, ScrollView, Alert} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button/index';
import {styles} from './styles';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {SafeAreaView} from 'react-native-safe-area-context';
import {request} from '../../../utils/request';
import { signup } from '../../../utils/backendCalls';
import { UserContext } from '../../../../App';

const Signup = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const {setUser}=useContext(UserContext);

  const onSignIn = () => {
    navigation.navigate('Signin');
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onSubmit = async () => {
    try {
      if (
        !values?.password ||
        !values?.confirmPassword ||
        !values?.fullName ||
        !values?.email
      ) {
        Alert.alert('All fields required');
        return;
      }

      if (values?.password !== values?.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      const token = await signup(values);
      setUser({token});

      console.log("token=>",token);
    } catch (error) {
      console.log('error=>', error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input
          value={values.fullName}
          onChangeText={v => onChange('fullName', v)}
          label="Name"
          placeholder={'John Doe'}
        />
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
        <Input
          value={values.confirmPassword}
          onChangeText={v => onChange('confirmPassword', v)}
          isPassword
          label="Password"
          placeholder={'*********'}
        />
        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>

        <Button onPress={onSubmit} style={styles.button} title="Sign Up" />

        <Seperator text="Or sign up with" />
        <GoogleLogin />

        <Text style={styles.footerText}>
          already have an account?
          <Text style={styles.footerLink} onPress={onSignIn}>
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
