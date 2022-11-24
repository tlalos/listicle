import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Seperator = ({text}) => {
  return (
  <View style={styles.container}>
    <View style={styles.line}></View>
    <Text style={styles.text}>{text}</Text>
    <View style={styles.line}></View>
  </View>
  );
};

export default Seperator;
