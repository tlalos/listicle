import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import {styles} from './styles';

const Profile = ({navigation}) => {
  const onLogout = () => {};
  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };

  const onCreatingListingPress = () => {
    navigation.navigate('CreateListing');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User email</Text>
          <ListItem title="My Listings" subtitle="You have 10 listings" />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle="Account, FAQ, Contact"
          />
        </View>

        <Button
          onPress={onCreatingListingPress}
          style={{flex: 0}}
          title="Add New Listing"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
