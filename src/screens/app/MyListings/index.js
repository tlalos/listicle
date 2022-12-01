import React from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import {products} from '../../../data/products';
import {styles} from './styles';

const MyListings = ({navigation}) => {
  const renderItem = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };

    return <FavoriteItem icon={require('../../../assets/remove.png')} onPress={onProductPress} {...item} />;
  };

 const goBack=()=>{
  navigation.goBack();
 }

  return (
    <SafeAreaView>
      <Header title="My Listings" showBack onBackPress={goBack}/>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
