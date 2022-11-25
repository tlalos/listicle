import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: 8,

    width: (width - 50) / 2,
  },
  title: {
    color: colors.textGrey,
    paddingVertical: 8,
  },
  image: {
    width: (width - 64) / 2,
    height: 220,
    borderRadius: 8,
  },
  price: {
    color: colors.black,
    paddingBottom: 8,
  },
});
