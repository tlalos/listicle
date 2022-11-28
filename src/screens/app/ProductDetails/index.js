import React from 'react';
import {ScrollView, Image, View, Text, Pressable, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';
import {styles} from './styles';

const ProductDetails = ({navigation, route}) => {
  const {product} = route?.params || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    //make phone call
    Linking.openURL('tel:343242423');
    //send an email
    Linking.openURL('mailto:tlalos@hotmail.com');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product.images} />
        ) : (
          <Image style={styles.image} source={{uri: product?.image}} />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>

        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backkIcon}
            source={require('../../../assets/back.png')}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            resizeMode={'contain'}
            style={styles.bookmarkIcon}
            source={require('../../../assets/bookmark.png')}
          />
        </Pressable>
        <Button onPress={onContact} title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
