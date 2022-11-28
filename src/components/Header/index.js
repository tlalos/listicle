import React, {useState} from 'react';
import {Pressable, View, Text, Image} from 'react-native';
import Input from '../Input';
import {styles} from './styles';

const Header = ({
  title,
  onBackPress,
  onLogout,
  showLogout,
  showSearch,
  onSearch,
  value,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              resizeMode={'contain'}
              style={styles.icon}
              source={require('../../assets/back.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              style={styles.icon}
              source={require('../../assets/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require('../../assets/logout.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput ? (
        <Input
          onChangeText={onSearch}
          value={value}
          placeholder="Type your keyword..."
        />
      ) : null}
    </View>
  );
};

export default React.memo(Header);
