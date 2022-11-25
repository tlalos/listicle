import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {styles} from './styles';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [filteredProduct, setfilteredProduct] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product.category === selectedCategory,
      );
      setfilteredProduct(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product.category === selectedCategory &&
          product?.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setfilteredProduct(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setfilteredProduct(updatedProducts);
    } else if (!selectedCategory && !keyword) {
      setfilteredProduct(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => {
          setSelectedCategory(item?.id);
        }}
        isSelected={item?.id === selectedCategory}
        title={item?.title}
        image={item?.image}
        isFirst={index === 0}
      />
    );
  };

  const renderProductItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product});
    };
    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
  };

  return (
    <SafeAreaView>
      <Header
        showSearch={true}
        onSearch={setKeyword}
        keyword={keyword}
        title="Find All You Need"
      />
      <FlatList
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />
      <FlatList
        style={styles.productsList}
        data={filteredProduct}
        numColumns={2}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
