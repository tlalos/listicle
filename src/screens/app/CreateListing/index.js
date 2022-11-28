import React, {useState} from 'react';
import {Linking, View, Text, Image, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {styles} from './styles';


const CreateListing = ({navigation, route}) => {
 
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header
        title="Create a new listing"
        showBack={true}
        onBackPress={goBack}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
