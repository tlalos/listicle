import React, {useState} from 'react';
import {Linking, View, Text, Image, Pressable, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListItem from '../../../components/ListItem';
import Header from '../../../components/Header';
import {styles} from './styles';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';
import {colors} from '../../../utils/colors';

const Settings = ({navigation, route}) => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({
    name: 'User',
    email: 'tlalos@hotmail.com',
  });

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
  };

  const onChange = (key, value) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onItemPress = () => {
    Linking.openURL('https://google.com');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header title="Settings" showBack onBackPress={goBack} />
      <ScrollView style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              resizeMode={'contain'}
              style={styles.icon}
              source={require('../../../assets/pencil.png')}
            />
          </Pressable>
        </View>

        <EditableBox
          label="Name"
          onChangeText={v => onChange('name', v)}
          value={values.name}
          editable={editing}
        />
        <EditableBox
          label="Email"
          onChangeText={v => onChange('email', v)}
          value={values.email}
          editable={editing}
        />
        {editing ? (
          <Button style={styles.button} title="Save" onPress={onSave} />
        ) : null}

        <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
        <ListItem onPress={onItemPress} title="FAQ" style={styles.item} />
        <ListItem
          onPress={onItemPress}
          title="Contact Us"
          style={styles.item}
        />
        <ListItem
          onPress={onItemPress}
          title="Privacy & Terms"
          style={styles.item}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
