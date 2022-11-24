import React, {useState} from 'react';
import {View, Pressable, Text, ScrollView} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input/index';
import Button from '../../../components/Button/index';
import {styles} from './styles';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {};

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder={'John Doe'} />
      <Input label="Email" placeholder={'example@gmail.com'} />
      <Input isPassword label="Password" placeholder={'*********'} />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>
      <Button style={styles.button} title="Sign Up" />
      <Seperator text="Or sign up with" />
      <GoogleLogin />

      <Text style={styles.footerText}>
        already have an account?
        <Text style={styles.footerLink} onPress={onSignIn}>
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signup;
